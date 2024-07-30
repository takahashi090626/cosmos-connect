import * as THREE from 'three';

class Constellation extends THREE.Object3D {
  constructor(posts) {
    super();

    const material = new THREE.LineBasicMaterial({ color: 0x00ffff });

    posts.forEach((post, index) => {
      if (index === posts.length - 1) return;

      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(post.x, post.y, post.z),
        new THREE.Vector3(posts[index + 1].x, posts[index + 1].y, posts[index + 1].z)
      ]);

      const line = new THREE.Line(geometry, material);
      this.add(line);
    });
  }
}

export default Constellation;