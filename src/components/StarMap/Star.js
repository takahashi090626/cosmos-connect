import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

class Star extends THREE.Mesh {
  constructor(post) {
    const geometry = new THREE.SphereGeometry(0.2, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    super(geometry, material);

    this.post = post;
    this.loadFont();
  }

  async loadFont() {
    const loader = new FontLoader();
    try {
      const font = await loader.loadAsync('/fonts/helvetiker_regular.typeface.json');
      this.addTextLabel(font);
    } catch (error) {
      console.error('Failed to load font:', error);
    }
  }

  addTextLabel(font) {
    const textGeometry = new TextGeometry(this.post.title.substring(0, 10), {
      font: font,
      size: 0.1,
      height: 0.05,
    });
    const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(0.3, 0.3, 0.3);
    this.add(textMesh);
  }
}

export default Star;
