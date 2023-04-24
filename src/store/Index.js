import { proxy } from "valtio";

const state=proxy({
intro:true,
color:"#efbd48",
isLogoTexture:true,
idFullTexture:false,
logoDecal:"./threejs.png",
fullDecal:"./threejs.png"

})
export default state;