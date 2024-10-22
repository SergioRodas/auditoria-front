// Función para quitar acentos de una cadena
function removeAccents(str: string): string {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Función para formatear el nombre del archivo de imagen
export const formatImageFilename = (name): string => {
    const normalized = removeAccents(name);
    return normalized.toLowerCase().replace(/\s+/g, "_") + ".png";
}