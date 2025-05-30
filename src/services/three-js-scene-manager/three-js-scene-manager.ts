import * as THREE from "three";
import { GLTFLoader, OBJLoader, USDZLoader } from "three/examples/jsm/Addons.js";

export type FileFormat = "obj" | "glb";

export default class ThreeJSSceneManager {
  static async render(
    fileUrl: string
  ): Promise<THREE.Scene> {
    const extMatch = fileUrl.match(/\.([a-z0-9]+)(?:\?.*)?$/i);
    const ext = extMatch ? extMatch[1].toLowerCase() : '';
    
    switch (ext) {
      case 'obj':
        return this.processObjFile(fileUrl);

      case "glb":
        return this.processGlbFile(fileUrl);

      default:
        throw new Error(`Unsupported format: ${ext}`);
    }
  }

  private static createBaseScene(ambientIntense: number = 1): THREE.Scene {
    const scene = new THREE.Scene();
    scene.add(new THREE.AmbientLight(0xffffff, ambientIntense));
    
    const dir = new THREE.DirectionalLight(0xffffff, 1);
    dir.position.set(0, 1, 1).normalize();
    
    scene.add(dir);
    return scene;
  }

  private static prepareObject(
    object: THREE.Object3D,
    needLines: boolean = false,
    baseScale: number = 4,
  ) {
    const bbox = new THREE.Box3().setFromObject(object);
    const size = bbox.getSize(new THREE.Vector3());
    const scale = baseScale / Math.max(size.x, size.y, size.z);

    object.scale.set(scale, scale, scale);
    object.position.set(0, 0, 0);

    object.traverse((child: any) => {
      if (child.isMesh && !child.material) {
        child.material = new THREE.MeshStandardMaterial({ color: 0xdddddd });
      }

      if (needLines && (child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const edges = new THREE.EdgesGeometry(mesh.geometry);
        const line = new THREE.LineSegments(
          edges,
          new THREE.LineBasicMaterial({ color: 0x333333 })
        );
        mesh.add(line);
      }
    });
  }

  private static async processObjFile(url: string): Promise<THREE.Scene> {
    const scene = this.createBaseScene();
    const loader = new OBJLoader();
    
    const object = await new Promise<THREE.Object3D>((resolve, reject) => {
      loader.load(url, resolve, undefined, reject);
    });

    this.prepareObject(object, true);
    scene.add(object);
    (scene.userData as any).model = object;
    return scene;
  }

  private static async processGlbFile(url: string): Promise<THREE.Scene> {
    const scene = this.createBaseScene(3);
    const loader = new GLTFLoader();
    const gltf = await new Promise<any>((resolve, reject) => {
      loader.load(url, resolve, undefined, reject);
    });
    const object = gltf.scene;
    this.prepareObject(object);
    scene.add(object);
    (scene.userData as any).model = object;
    return scene;
  }
}
