import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Star from './Star'; // Starクラスをインポート

const StarMap = ({ posts }) => {
  const containerRef = useRef();
  const [scene, setScene] = useState(null);
  const [camera, setCamera] = useState(null);
  const [renderer, setRenderer] = useState(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const newScene = new THREE.Scene();
    const newCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const newRenderer = new THREE.WebGLRenderer({ antialias: true });

    newRenderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(newRenderer.domElement);

    const controls = new OrbitControls(newCamera, newRenderer.domElement);
    newCamera.position.z = 5;

    setScene(newScene);
    setCamera(newCamera);
    setRenderer(newRenderer);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      newRenderer.render(newScene, newCamera);
    };
    animate();

    return () => {
      if (container && newRenderer.domElement) {
        container.removeChild(newRenderer.domElement);
      }
      newRenderer.dispose();
    };
  }, []);

  useEffect(() => {
    if (!scene || !camera || posts.length === 0) return;

    // 既存のオブジェクトをクリア
    scene.children.forEach(child => {
      if (child instanceof Star) {
        scene.remove(child);
      }
    });

    // 星を追加
    posts.forEach((post) => {
      const star = new Star(post);
      star.position.set(
        Math.random() * 20 - 10,
        Math.random() * 20 - 10,
        Math.random() * 20 - 10
      );
      scene.add(star);
    });

    // カメラの位置を調整
    camera.position.z = 15;

  }, [posts, scene, camera]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default StarMap;
