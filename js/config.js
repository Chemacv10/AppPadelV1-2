// ─────────────────────────────────────────────
//  ESCUELA DE PÁDEL — Configuración
// ─────────────────────────────────────────────

const SUPABASE_URL  = 'https://tucegjotydqrgxdcboqn.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1Y2Vnam90eWRxcmd4ZGNib3FuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4OTAwNzEsImV4cCI6MjA4ODQ2NjA3MX0.TOuYM1rIhoFHCfbZTEHDu6VhmQABsUjgGYsekdsOckE';

// Colores del sistema de diseño
const COLOR = {
  azul:    '#2563eb',
  verde:   '#16a34a',
  naranja: '#f59e0b',
  rojo:    '#e05a5a',
  morado:  '#7c3aed',
  gris:    '#64748b',
};

// Niveles (personalizables por escuela — se sobreescriben desde Supabase)
const NIVELES_DEFAULT = ['Principiante', 'Intermedio', 'Avanzado'];

// Módulos con sus rutas
const MODULOS = [
  { id: 'inicio',      label: 'Inicio',     href: 'index.html',       icon: 'icons/inicio.png'      },
  { id: 'alumnos',     label: 'Alumnos',    href: 'alumnos.html',     icon: 'icons/alumnos.png'     },
  { id: 'grupos',      label: 'Grupos',     href: 'grupos.html',      icon: 'icons/grupos.png'      },
  { id: 'ejercicios',  label: 'Ejercicios', href: 'ejercicios.html',  icon: 'icons/ejercicios.png'  },
  { id: 'clases',      label: 'Clases',     href: 'clases.html',      icon: 'icons/clases.png'      },
  { id: 'torneos',     label: 'Torneos',    href: 'torneos.html',     icon: 'icons/torneos.png'     },
  { id: 'stats',       label: 'Stats',      href: 'stats.html',       icon: 'icons/stats.png'       },
  { id: 'pistas',      label: 'Pistas',     href: 'pistas.html',      icon: 'icons/pistas.png'      },
];
