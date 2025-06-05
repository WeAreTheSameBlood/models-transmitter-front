export const ModelsEntityManager = {
  // MARK - Process as URL
  async processModelAsUrl(url: string): Promise<string> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Помилка завантаження моделі: ${response.statusText}`);
    }

    const blob = await response.blob();
    
    if (
      !blob.type ||
      !/^(model\/gltf-binary|model\/obj|model\/usdz)/.test(blob.type)
    ) {
      console.warn(
        `Expected 3D-blob (GLB/OBJ), but got type is: ${blob.type}`
      );
    }
    const objectUrl = URL.createObjectURL(blob);
    return objectUrl;
  },

  revokeObjectUrl(objectUrl: string) {
    URL.revokeObjectURL(objectUrl);
  },
};