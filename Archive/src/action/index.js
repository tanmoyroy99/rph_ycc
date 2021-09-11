export const LOGIN_USER             = "LOGIN_USER";
export const URL_INVENTORY_HEADER   = "URL_INVENTORY_HEADER";
export const URL_INVENTORY_DATA     = "URL_INVENTORY_DATA";

export function setInventoryHeader(data){
    return {
        type: URL_INVENTORY_HEADER,
        data
    }
}
