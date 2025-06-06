"use client";
import React, { useEffect } from "react";
import { useState, useRef } from 'react';
import Image from "next/image";
import "./item-media-panel-props.css";
import * as THREE from "three";
import ThreeJSSceneManager, { FileFormat } from '@/services/three-js-scene-manager/three-js-scene-manager';
import { OBJLoader, OrbitControls } from "three/examples/jsm/Addons.js";

export interface ItemMediaPanelProps {
  modelUrl: string,
  mediaUrls: string[];
}

export const ItemMediaPanel: React.FC<ItemMediaPanelProps> = ({ modelUrl, mediaUrls }) => {
  const [selected, setSelected] = useState(0);
  const [wireframe, setWireframe] = useState(false);
  const modelRef = useRef<THREE.Group>();
  const items = [{ type: '3d' }, ...mediaUrls.map((url) => ({ type: 'img', url }))];
  const previewRef = useRef<HTMLDivElement>(null);
  const thumbCanvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selected !== 0 || !previewRef.current) return;
    const container = previewRef.current!;
    const cleanupContainer = container;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scenePromise = ThreeJSSceneManager.render(modelUrl);

    let renderer: THREE.WebGLRenderer;
    let controls: any;
    let animationId: number;

    scenePromise.then((scene) => {
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(2, 2, 3);
      camera.lookAt(0, 0, 0);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      renderer.autoClear = false;

      container.innerHTML = '';
      container.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.1;
      controls.target.set(0, 0, 0);
      controls.update();

      modelRef.current = (scene.userData as any).model as THREE.Group;

      const axesScene = new THREE.Scene();
      const axesCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
      axesCamera.position.set(0, 0, 2);
      const axesHelper = new THREE.AxesHelper(1);
      axesScene.add(axesHelper);

      const widgetSize = 100;
      const margin = 10;

      function animate() {
        animationId = requestAnimationFrame(animate);
        renderer.clear();
        controls.update();
        renderer.render(scene, camera);

        renderer.clearDepth();
        axesHelper.quaternion.copy(camera.quaternion);
        renderer.setViewport(
          width - widgetSize - margin,
          margin,
          widgetSize,
          widgetSize
        );
        renderer.render(axesScene, axesCamera);
        renderer.setViewport(0, 0, width, height);
      }
      animate();
    });

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (renderer) renderer.dispose();
      if (cleanupContainer) cleanupContainer.innerHTML = '';
    };
  }, [selected]);

  useEffect(() => {
    if (!thumbCanvasRef.current) return;
    const container = thumbCanvasRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    let renderer: THREE.WebGLRenderer;
    let animationId: number;

    ThreeJSSceneManager.render(modelUrl).then((scene) => {
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(7, 7, 7);
      camera.lookAt(0, 0, 0);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);

      container.innerHTML = "";
      container.appendChild(renderer.domElement);

      const box = new THREE.Box3().setFromObject(scene);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 6 / maxDim;
      scene.scale.set(scale, scale, scale);

      const animateThumb = () => {
        animationId = requestAnimationFrame(animateThumb);
        renderer.render(scene, camera);
      };
      animateThumb();
    }).catch((err) => {
      console.error("Failed to load thumbnail model:", err);
    });

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (renderer) {
        renderer.dispose();
      }
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [modelUrl]);

  useEffect(() => {
    if (!modelRef.current) return;
    modelRef.current.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        (mesh.material as any).wireframe = wireframe;
      }
    });
  }, [wireframe]);

  return (
    <div className="item-media-panel">

      <div className="preview-frame">
        {items[selected].type === 'img' ? (
          <Image
            src={(items[selected] as any).url}
            alt={`Preview ${selected}`}
            fill
            style={{ objectFit: "contain" }}
          />
        ) : (
          <div ref={previewRef} className="preview-canvas" />
        )}
        {selected === 0 && (
          <button
            className="wireframe-toggle"
            onClick={() => setWireframe((wf) => !wf)}
          >
            {wireframe ? 'Solid' : 'Wireframe'}
          </button>
        )}
      </div>

      <div className="thumbnail-list">

        {items.map((item, idx) => (

          <div
            key={idx}
            className={`thumb-frame ${idx === selected ? "active" : ""}`}
            onClick={() => setSelected(idx)}
          >

            {item.type === 'img' ? (
              <Image
                src={item.url!}
                alt={`thumb ${idx}`}
                fill
                // style={{ objectFit: "cover"}}
                style={{ objectFit: "contain"}}
              />
            ) : (
              <div ref={thumbCanvasRef} className="thumb-canvas" />
            )}
          </div>

        ))}

      </div>

    </div>
  );
};
