import { SET_ASSETS } from "../reducers/album";

export function setAssets(assetMeta) {
    return {
        type: SET_ASSETS,
        assets: assetMeta
    }
}