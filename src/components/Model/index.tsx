import React from "react";
import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import SceneInit from "../../assests/model/SenceInit";
import styles from "@/styles/Home.module.css";

interface Props {
    // define your props here
}

const Model: React.FC<Props> = (props) => {
    useEffect(() => {
        const test = new SceneInit("canvasId", "canvasEl");
        test.initialize();
        test.animate();

        // test.scene.background = new THREE.Color(0xffffff);

        let loadedModel: any;
        const glftLoader = new GLTFLoader();
        glftLoader.load("./model/scene.gltf", (gltfScene) => {
            loadedModel = gltfScene;
            gltfScene.scene.rotation.y = 10;
            gltfScene.scene.position.y = -10;
            gltfScene.scene.scale.set(0.5, 0.5, 0.5);
            test.scene.add(gltfScene.scene);
        });
        const animate = () => {
            if (loadedModel) {
                // loadedModel.scene.rotation.x += 0.01;
                loadedModel.scene.rotation.y += 0.01;
                // loadedModel.scene.rotation.z += 0.01;
            }
            requestAnimationFrame(animate);
        };
        animate();
    }, []);
    return (
        <div id="canvasEl" className={styles.canvasEl}>
            <canvas id="canvasId"></canvas>
        </div>
    );
};

export default Model;
