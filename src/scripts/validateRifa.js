import moment from 'moment-timezone'; // Importación clave

export function validarVigenciaRifa(fechaStr, horaStr) {
    // 1. Parsear fecha y hora (formato: "YYYY-MM-DD" y "HH:mm")
    const [anio, mes, dia] = fechaStr.split('-');
    const [horas, minutos] = horaStr.split(':');
    
    // 2. Crear objeto moment en zona horaria de Venezuela (CON SEGUNDOS)
    const rifaDateTime = moment.tz(
      {
        year: anio,
        month: mes - 1, // Restar 1 porque meses en moment son 0-11
        day: dia,
        hour: horas,
        minute: minutos,
        second: 0 // Opcional: forzar segundos a 0 si no se especifican
      },
      'America/Caracas'
    );
  
    // 3. Obtener hora actual en Venezuela (CON SEGUNDOS)
    const ahoraVenezuela = moment().tz('America/Caracas');
  
    // 4. Debug: Mostrar fechas con segundos
    console.log('Rifa:', rifaDateTime.format('YYYY-MM-DD HH:mm:ss'));
    console.log('Ahora:', ahoraVenezuela.format('YYYY-MM-DD HH:mm:ss'));
  
    // 5. Comparación exacta (incluyendo segundos)
    return rifaDateTime.isSameOrAfter(ahoraVenezuela);
  }