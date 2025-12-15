import { SET_BATCH_SIZE } from "../reducers/navigation";

export function setBatchSize(batchSize) {
    return {
        type: SET_BATCH_SIZE,
        batchSize
    }
}