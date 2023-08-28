import { PerspectiveCamera } from "three";
import { sizes } from "../system/sizes";
function createCamera(){
    const camera = new PerspectiveCamera(65, sizes.width / sizes.height, 2, 2000)
    camera.position.set(0, 0, 10)
    return camera
}
export {createCamera }