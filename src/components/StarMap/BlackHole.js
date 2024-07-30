import * as THREE from 'three';

class BlackHole extends THREE.Mesh {
  constructor() {
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    super(geometry, material);

    this.position.set(0, 0, 0);
  }
}

export default BlackHole;