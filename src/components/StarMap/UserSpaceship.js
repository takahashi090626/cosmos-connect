import * as THREE from 'three';

class UserSpaceship extends THREE.Mesh {
  constructor() {
    const geometry = new THREE.ConeGeometry(0.2, 0.5, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xff69b4 });
    super(geometry, material);

    this.position.set(2, 2, 2);
  }
}

export default UserSpaceship;