//Peticion Get con Refetch asincrono
export const useFetchGetPaged = () => {
  const mockData = {
    rows: [
      {
        nombre: '1. Hogares apoyados por organizaciones de la sociedad civil',
        descripcion: 'Número de hogares que reciben apoyo de organizaciones de la sociedad civil en el marco del Plan de Acción 2024-2028.',
        medida: 'Organizaciones',
        metas: {
          AF24: { T1: 100, T2: 150, T3: 150, T4: 100, Total: 500 },
          AF25: { T1: 120, T2: 180, T3: 180, T4: 120, Total: 600 },
          AF26: { T1: 140, T2: 210, T3: 210, T4: 140, Total: 700 }, 
          AF27: { T1: 160, T2: 240, T3: 240, T4: 160, Total: 800 },
          AF28: { T1: 180, T2: 270, T3: 270, T4: 180, Total: 900 },
          LOP: { Total: 2000 }
        },
        progresos: {
          AF24: { T1: 100, T2: 140, T3: 160, T4: 30, Total: 430 },
          AF25: { T1: 120, T2: 170, T3: 190, T4: 130, Total: 610 },
          AF26: { T1: 140, T2: 200, T3: 220, T4: 150, Total: 710 },
          AF27: { T1: 160, T2: 230, T3: 250, T4: 170, Total: 810 },
          AF28: { T1: 180, T2: 260, T3: 280, T4: 190, Total: 910 },
          LOP: { Total: 3000 }
        }
      },
      {
        nombre: '2. Personas beneficiadas con programas de capacitación',
        descripcion: 'Número de personas que reciben capacitación en habilidades laborales a través de programas implementados por el gobierno.',
        medida: 'Personas',
        metas: {
          AF24: { T1: 200, T2: 300, T3: 300, T4: 200, Total: 1000 },
          AF25: { T1: 240, T2: 360, T3: 360, T4: 240, Total: 1200 },
          AF26: { T1: 280, T2: 420, T3: 420, T4: 280, Total: 1400 }, 
          AF27: { T1: 320, T2: 480, T3: 480, T4: 320, Total: 1600 },
          AF28: { T1: 360, T2: 540, T3: 540, T4: 360, Total: 1800 },
          LOP: { Total: 5000 }
        },
        progresos: {
          AF24: { T1: 200, T2: 280, T3: 300, T4: 150, Total: 930 },
          AF25: { T1: 240, T2: 340, T3: 360, T4: 220, Total: 1160 },
          AF26: { T1: 280, T2: 400, T3: 420, T4: 250, Total: 1350 },
          AF27: { T1: 320, T2: 460, T3: 480, T4: 280, Total: 1540 },
          AF28: { T1: 360, T2: 520, T3: 540, T4: 310, Total: 1730 },
          LOP: { Total: 6000 }
        }
      },
      {
        nombre: '3. Fondos asignados a proyectos de desarrollo comunitario',
        descripcion: 'Monto total de fondos asignados a proyectos de desarrollo comunitario en el marco del Plan de Acción 2024-2028.',
        medida: 'Monetario',
        metas: {
          AF24: { T1: 500000, T2: 750000, T3: 750000, T4: 500000, Total: 2500000 },
          AF25: { T1: 600000, T2: 900000, T3: 900000, T4: 600000, Total: 3000000 },
          AF26: { T1: 700000, T2: 1050000, T3: 1050000, T4: 700000, Total: 3500000 }, 
          AF27: { T1: 800000, T2: 1200000, T3: 1200000, T4: 800000, Total: 4000000 },
          AF28: { T1: 900000, T2: 1350000, T3: 1350000, T4: 900000, Total: 4500000 },
          LOP: { Total: 15000000 }
        },
        progresos: {
          AF24: { T1: 500000, T2: 700000, T3: 750000, T4: 400000, Total: 2350000 },
          AF25: { T1: 600000, T2: 850000, T3: 900000, T4: 500000, Total: 2850000 },
          AF26: { T1: 700000, T2: 1000000, T3: 1050000, T4: 600000, Total: 3150000 },
          AF27: { T1: 800000, T2: 1150000, T3: 1200000, T4: 700000, Total: 3550000 },
          AF28: { T1: 900000, T2: 1300000, T3: 1350000, T4: 800000, Total: 3950000 },
          LOP: { Total: 12000000 }
        }
      },
      {
        nombre: '4. Número de organizaciones de la sociedad civil fortalecidas',
        descripcion: 'Número de organizaciones de la sociedad civil que han recibido capacitación y recursos para fortalecer su capacidad operativa.',
        medida: 'Organizaciones',
        metas: {
          AF24: { T1: 0, T2: 0, T3: 75, T4: 50, Total: 125 },
          AF25: { T1: 60, T2: 90, T3: 90, T4: 60, Total: 300 },
          AF26: { T1: 70, T2: 105, T3: 105, T4: 70, Total: 350 }, 
          AF27: { T1: 80, T2: 120, T3: 120, T4: 80, Total: 400 },
          AF28: { T1: 90, T2: 135, T3: 135, T4: 90, Total: 450 },
          LOP: { Total: 1500 }
        },
        progresos: {
          AF24: { T1: 0, T2: 0, T3: 75, T4: 30, Total: 105 },
          AF25: { T1: 60, T2: 80, T3: 90, T4: 40, Total: 270 },
          AF26: { T1: 70, T2: 95, T3: 105, T4: 50, Total: 320 },
          AF27: { T1: 80, T2: 110, T3: 120, T4: 60, Total: 370 },
          AF28: { T1: 90, T2: 125, T3: 135, T4: 70, Total: 420 },
          LOP: { Total: 1500 }
        }
      },
      {
        nombre: '5. Personas beneficiadas con servicios de salud comunitaria',
        descripcion: 'Número de personas que reciben servicios de salud comunitaria a través de programas implementados por el gobierno.',
        medida: 'Personas',
        metas: {
          AF24: { T1: 300, T2: 450, T3: 450, T4: 300, Total: 1500 },
          AF25: { T1: 360, T2: 540, T3: 540, T4: 360, Total: 1800 },
          AF26: { T1: 420, T2: 630, T3: 630, T4: 420, Total: 2100 }, 
          AF27: { T1: 480, T2: 720, T3: 720, T4: 480, Total: 2400 },
          AF28: { T1: 540, T2: 810, T3: 810, T4: 540, Total: 2700 },
          LOP: { Total: 7500 }
        },
        progresos: {
          AF24: { T1: 300, T2: 400, T3: 450, T4: 200, Total: 1350 },
          AF25: { T1: 360, T2: 500, T3: 540, T4: 250, Total: 1650 },
          AF26: { T1: 420, T2: 600, T3: 630, T4: 300, Total: 1950 },
          AF27: { T1: 480, T2: 700, T3: 720, T4: 350, Total: 2250 },
          AF28: { T1: 540, T2: 800, T3: 810, T4: 400, Total: 2550 },
          LOP: { Total: 8000 }
        }
      },
      {
        nombre: '6. Proyectos de infraestructura comunitaria completados',
        descripcion: 'Número de proyectos de infraestructura comunitaria completados en el marco del Plan de Acción 2024-2028.',
        medida: 'Proyectos',
        metas: {
          AF24: { T1: 2, T2: 3, T3: 3, T4: 2, Total: 10 },
          AF25: { T1: 3, T2: 4, T3: 4, T4: 3, Total: 14 },
          AF26: { T1: 4, T2: 5, T3: 5, T4: 4, Total: 18 }, 
          AF27: { T1: 5, T2: 6, T3: 6, T4: 5, Total: 22 },
          AF28: { T1: 6, T2: 7, T3: 7, T4: 6, Total: 26 },
          LOP: { Total: 80 }
        },
        progresos: {
          AF24: { T1: 2, T2: 3, T3: 3, T4: 1, Total: 9 },
          AF25: { T1: 3, T2: 4, T3: 4, T4: 2, Total: 13 },
          AF26: { T1: 4, T2: 5, T3: 5, T4: 3, Total: 17 },
          AF27: { T1: 5, T2: 6, T3: 6, T4: 4, Total: 21 },
          AF28: { T1: 6, T2: 7, T3: 7, T4: 5, Total: 25 },
          LOP: { Total: 70 }
        }
      }
    ]
  }

  return {
    data: mockData,
    isLoading: false,
    isError: false,
 };
};