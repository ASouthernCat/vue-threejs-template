import * as resize from "./system/resize"
import * as THREE from "three"
import Stats from "stats.js"
import { createCamera } from "./base/camera"
import { createScene } from "./base/scene"
import { createCube } from "./base/cube"
import { createRenderer } from "./base/renderer"
import { createControl } from "./base/control"

class ThreeApp {
    constructor(container) {
        // console.log(container)
        console.log("场景初始化")
        // 相机 camera
        this.camera = createCamera()
        // 控制器
        this.control = createControl(this.camera, container)
        // 场景 scene
        this.scene = createScene()
        // 场景组成内容 object3D
        const cube = createCube()
        this.scene.add(cube)
        // 渲染器 renderer
        this.renderer = createRenderer(container)
        // resize
        resize.resizeEventListener(this.camera, this.renderer)
    }
    render() {
        // 渲染场景
        console.log("渲染场景...")
        const clock = new THREE.Clock()
        var stats = new Stats();
        stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
        stats.dom.style.top = "20%"
        document.body.appendChild(stats.dom);
        const tick = () => {
            stats.update()
            const elapsedTime = clock.getElapsedTime()
            const deltatTime = clock.getDelta()

            // // Update controls
            this.control.update()

            // Raycast
            // pickHelper.pick(pickPosition, currentScene.scene, camera)

            // // Render
            this.renderer.render(this.scene, this.camera)

            // Call tick again on the next frame
            window.requestAnimationFrame(tick)
        }
        tick()
    }
    clear() {
        console.log("清理内存")
        resize.clear()
    }
}

export { ThreeApp }