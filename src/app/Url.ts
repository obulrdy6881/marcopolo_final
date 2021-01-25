import { environment } from '../environments/environment';
var baseUrl = environment.baseUrl;


export const APIURL = {

    // USERS
    UPLOAD_TILES: baseUrl + "admin/UploadTiles",
    UPLOAD_SUB_TILES: baseUrl + "admin/UploadSubTiles",
    UPDATE_TILES_BY_TILEID: baseUrl + "admin/updateTilesByTileId",
    GET_TILES: baseUrl + "admin/GetTiles",
    GET_TILE_BY_TILEID: baseUrl + "admin/GetTilesByTileId",
    DELETE_TILE_BY_TILEID: baseUrl + "admin/DeleteTilesByTileId",

    GET_RELATED_TILES: baseUrl + "admin/GetRelatedTiles",
    DELETE_RELATED_TILE: baseUrl + "admin/DeleteRelatedTile",




}
