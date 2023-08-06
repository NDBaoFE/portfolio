import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class SceneInit {
    // : Core components to initialize Three.js app.
    public scene!: THREE.Scene;
    public camera!: THREE.PerspectiveCamera;
    public renderer!: THREE.WebGLRenderer;

    // : Camera params;
    private readonly fov: number = 45;
    private readonly nearPlane: number = 1;
    private readonly farPlane: number = 1000;
    private readonly canvasId: string;
    private readonly canvasEl: string;

    // Additional components.
    private clock!: THREE.Clock;
    private controls!: OrbitControls;

    // Lighting is basically required.
    private ambientLight!: THREE.AmbientLight;
    private directionalLight!: THREE.DirectionalLight;

    constructor(canvasId: string, canvasEl: string) {
        this.canvasId = canvasId;
        this.canvasEl = canvasEl;
    }

    public initialize(): void {
        const canvasEL = document.getElementById(this.canvasEl)!;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            this.fov,
            canvasEL.offsetWidth / canvasEL.offsetHeight,
            1,
            1000
        );
        this.camera.position.z = 48;

        // : Specify a canvas which is already created in the HTML.
        const canvas = document.getElementById(this.canvasId)!;
        this.renderer = new THREE.WebGLRenderer({
            canvas,
            // : Anti-aliasing smooths out the edges.
            antialias: true,
            alpha: true,
        });

        this.renderer.setClearColor(0x000000, 0); // the default
        // this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setSize(canvasEL.offsetWidth, canvasEL.offsetHeight);
        // document.body.appendChild(this.renderer.domElement);

        this.clock = new THREE.Clock();
        this.controls = new OrbitControls(
            this.camera,
            this.renderer.domElement
        );

        // ambient light which is for the whole scene
        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
        this.ambientLight.castShadow = true;
        this.scene.add(this.ambientLight);

        this.directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        this.directionalLight.position.set(0, 32, 64);
        this.scene.add(this.directionalLight);

        const myArray = window.location.href.split(" ");
        if (myArray.at(-1) === "/") {
            // if window resizes
            window.addEventListener(
                "resize",
                () => this.onWindowResize(),
                false
            );
        }
    }

    getScene(): THREE.Scene {
        return this.scene;
    }

    public animate(): void {
        window.requestAnimationFrame(() => this.animate());
        this.render();
    }

    private render(): void {
        this.renderer.render(this.scene, this.camera);
    }

    private onWindowResize(): void {
        const canvasEL = document.getElementById(this.canvasEl)!;
        this.camera.aspect = canvasEL.offsetWidth / canvasEL.offsetHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(canvasEL.offsetWidth, canvasEL.offsetHeight);
    }
    setSence(scene: THREE.Scene): void {
        this.scene = scene;
    }
}
