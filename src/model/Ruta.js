import Area from './Area'
export default class Ruta {
    constructor(
        id,
        code,
        name,
        created_at,
        updated_at,
        deleted_at,
        origin_zone_id,
        destination_zone_id,
        provider_service_id,
        origen=null
    ) {
        this.id = id
        this.code = code
        this.name = name
        this.created_at = created_at
        this.updated_at = updated_at
        this.deleted_at = deleted_at
        this.origin_zone_id = origin_zone_id
        this.destination_zone_id = destination_zone_id
        this.provider_service_id = provider_service_id
        this.origen = origen
    }



    origin(area) {
        this.origen = area
    }

    handleChange(e){
        this.code = e.target.value
    }

}