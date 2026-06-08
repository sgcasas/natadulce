/**
 * @module utils/substitutions
 *
 * Ingredient substitution data and lookup utilities for the BakingHelper app.
 * All ingredient names, substitutes, and notes are in Spanish.
 */

// ──────────────────────────────────────────────
// INGREDIENT DATA
// ──────────────────────────────────────────────

/**
 * List of baking ingredients with practical substitution options.
 *
 * @type {Array<{name: string, substitutions: Array<{substitute: string, notes: string}>}>}
 */
export const INGREDIENTS = [
  {
    name: "Leche agria",
    substitutions: [
      {
        substitute: "Leche con vinagre",
        notes: "Añade 1 cucharada de vinagre blanco por cada taza de leche entera. Deja reposar 5 minutos hasta que cuaje ligeramente."
      },
      {
        substitute: "Leche con jugo de limón",
        notes: "Añade 1 cucharada de jugo de limón fresco por cada taza de leche. Reposa 5-10 minutos a temperatura ambiente."
      },
      {
        substitute: "Kéfir",
        notes: "Utiliza en proporción 1:1. El kéfir aporta acidez similar y una textura cremosa."
      },
      {
        substitute: "Yogur natural sin azúcar diluido",
        notes: "Mezcla 1 taza de yogur natural con un poco de leche hasta obtener consistencia de leche agria (relación aproximada 3/4 yogur + 1/4 leche)."
      }
    ]
  },
  {
    name: "Harina para pastel",
    substitutions: [
      {
        substitute: "Harina todo uso con maicena",
        notes: "Por cada taza de harina para pastel, usa 7/8 de taza de harina todo uso más 1/8 de taza de maicena. Tamiza bien."
      },
      {
        substitute: "Harina todo uso sin parte del gluten",
        notes: "Retira 2 cucharadas de harina todo uso por cada taza y reemplaza con 2 cucharadas de maicena para reducir el contenido proteico."
      },
      {
        substitute: "Harina de trigo bajo en proteína",
        notes: "Busca harinas etiquetadas como tipo B o harinas europeas tipo 550. Úsala en proporción 1:1."
      }
    ]
  },
  {
    name: "Harina todo uso",
    substitutions: [
      {
        substitute: "Mezcla de harina para pastel y harina de trigo fuerte",
        notes: "Combina partes iguales de harina para pastel y harina de fuerza para equilibrar el contenido proteico. Proporción 1:1."
      },
      {
        substitute: "Harina de trigo común",
        notes: "Cualquier harina de trigo con proteína entre 9% y 12% funciona como reemplazo directo en proporción 1:1."
      },
      {
        substitute: "Harina sin gluten (mezcla todo uso)",
        notes: "Usa una mezcla comercial sin gluten diseñada para sustituir harina todo uso (con goma xantana incluida) en proporción 1:1. Agrega media cucharadita extra de goma xantana si la mezcla no la incluye."
      },
      {
        substitute: "Harina integral tamizada",
        notes: "Tamiza dos veces para suavizar la textura. Nota: el sabor será más intenso y la miga más densa."
      }
    ]
  },
  {
    name: "Huevos",
    substitutions: [
      {
        substitute: "Puré de plátano maduro",
        notes: "Usa 1/4 de taza (60g) de puré de plátano por cada huevo. Ideal para panquécticas y bizcochos densos."
      },
      {
        substitute: "Yogur natural o kéfir",
        notes: "Reemplaza cada huevo con 1/4 de taza (60 ml) de yogur natural sin azúcar. Aporta humedad y ligera acidez."
      },
      {
        substitute: "Clara de huevo batida a punto nieve",
        notes: "Para la función levantera, bate 3 cucharas soperas de clara firme por cada huevo completo en recetas donde se requiera volumen."
      },
      {
        substitute: "Semillas de chía o lino hidratadas",
        notes: "Mezcla 1 cucharada de semillas molidas con 3 cucharadas de agua. Deja reposar 5 minutos hasta formar un gel. Reemplaza 1 huevo."
      },
      {
        substitute: "Applesauce (puré de manzana)",
        notes: "Usa 1/4 de taza de puré de manzana sin azúcar por cada huevo. Funciona bien en galletas y pasteles húmedos."
      }
    ]
  },
  {
    name: "Mantequilla",
    substitutions: [
      {
        substitute: "Aceite vegetal o de girasol",
        notes: "Usa 3/4 de taza de aceite por cada taza de mantequilla. Los resultados serán más húmedos pero con menos sabor."
      },
      {
        substitute: "Mantequilla sin lactosa",
        notes: "Reemplazo directo en proporción 1:1. Disponible en tiendas especializadas. Mismo comportamiento en repostería."
      },
      {
        substitute: "Coco rallado deshidratado rallado (aceite de coco)",
        notes: "Usa aceite de coco virgen en proporción 1:1. Aporta un ligero sabor a coco, adecuado para recetas dulces tropicales."
      },
      {
        substitute: "Applesauce o puré de manzana",
        notes: "Reemplaza la mitad de la mantequilla con puré de manzana para reducir grasa. No apto para masa hojaldrada."
      },
      {
        substitute: "Puré de aguacate",
        notes: "Usa en proporción 3/4 por cada taza de mantequilla. Neutraliza el sabor si se usa aguacate maduro y se mezcla bien."
      }
    ]
  },
  {
    name: "Azúcar",
    substitutions: [
      {
        substitute: "Jarabe de agave",
        notes: "Usa 2/3 de taza de jarabe de agave por cada taza de azúcar. Reduce otros líquidos de la receta en 3 cucharadas."
      },
      {
        substitute: "Stevia líquida o en polvo",
        notes: "Consulta el paquete para equivalencias, ya que la stevia es muchísimo más dulce. No aporta volumen ni humedad."
      },
      {
        substitute: "Miel",
        notes: "Usa 3/4 de taza de miel por cada taza de azúcar. Reduce líquidos en 2 cucharadas y baja la temperatura del horno 10 °C para evitar que dore demasiado."
      },
      {
        substitute: "Eritritol u otro edulcorante calorico",
        notes: "Reemplazo directo en proporción 1:1. Nota: el eritritol puede cristalizar al enfriarse y dar sensación fresca en boca."
      }
    ]
  },
  {
    name: "Azúcar morena",
    substitutions: [
      {
        substitute: "Azúcar blanca con melaza",
        notes: "Añade 1 cucharada de melaza por cada taza de azúcar blanca. Mezcla hasta obtener un color y textura similares."
      },
      {
        substitute: "Panela o rapadura rallada",
        notes: "Ralla fino la panela para usarla en proporción 1:1. Aporta sabor caramelizado muy similar al azúcar morena oscura."
      },
      {
        substitute: "Azúcar orgánica integral (turbinado)",
        notes: "Reemplazo directo en proporción 1:1. Conserva parte de la melaza natural del caña."
      },
      {
        substitute: "Moscovado o mascobado",
        notes: "Uso directo 1:1. Es azúcar morena de molienda más gruesa con mayor contenido de melaza."
      }
    ]
  },
  {
    name: "Azúcar glass",
    substitutions: [
      {
        substitute: "Azúcar blanca molida en procesador",
        notes: "Tritura azúcar blanca granulada en licuadora o molinillo durante 1 minuto hasta obtener polvo fino. Agrega 1 cucharadita de maicena por cada taza para evitar apelmazamiento."
      },
      {
        substitute: "Azúcar glass artesanal (moler en café molino)",
        notes: "Muele azúcar blanca en un molinillo dedicado. Tamiza después para eliminar grumos grandes."
      },
      {
        substitute: "Azúcar impalpable de otro paquete",
        notes: "Cualquier azúcar glass o impalpable comercial funciona como sustituto directo en proporción 1:1."
      }
    ]
  },
  {
    name: "Polvo para hornear",
    substitutions: [
      {
        substitute: "Bicarbonato de sodio con ácido cítrico o vinagre",
        notes: "Mezcla 1 cucharadita de bicarbonato con 2 cucharaditas de jugo de limón o vinagre. Reemplaza 1 cucharada de polvo para hornear."
      },
      {
        substitute: "Bicarbonato + crema de tártaro",
        notes: "Combina 1/2 cucharadita de bicarbonato con 1 cucharadita de crema de tártaro. Equivale a 1 cucharada de polvo para hornear."
      },
      {
        substitute: "Levadura química doble acción comercial otra marca",
        notes: "Cualquier polvo para hornear double-acting (acción dual) es intercambiable en proporción 1:1, sin importar la marca."
      },
      {
        substitute: "Bicarbonato + yogur agrio o leche agria",
        notes: "Si la receta ya contiene un ingrediente ácido como yogur, simplemente usa 1/4 de cucharadita de bicarbonato por cada cucharada de polvo para hornear."
      }
    ]
  },
  {
    name: "Bicarbonato de sodio",
    substitutions: [
      {
        substitute: "Polvo para hornear",
        notes: "Usa 3 a 4 veces la cantidad de bicarbonato en polvo para hornear. Por ejemplo, si necesitas 1 cucharadita de bicarbonato, usa 3 cucharaditas de polvo."
      },
      {
        substitute: "Bicarbonato potásico",
        notes: "Reemplazo directo 1:1, disponible en tiendas de repostería profesional. Misma función levantera alcalina."
      },
      {
        substitute: "Kalkwasser (agua cal) para masas ácidas",
        notes: "Usa una solución diluida de cal alimentaria solo en recetas que ya contengan ingredientes ácidos. Consulta tablas de conversión específicas."
      }
    ]
  },
  {
    name: "Leche entera",
    substitutions: [
      {
        substitute: "Leche deslactosada",
        notes: "Reemplazo directo en proporción 1:1. Misma grasa y contenido nutricional, sin lactosa."
      },
      {
        substitute: "Leche de almendras o avena",
        notes: "Usa leches vegetales enriquecidas para mantener el contenido graso similar. Puede alterar ligeramente el sabor."
      },
      {
        substitute: "Agua con leche en polvo entera",
        notes: "Reconstituye la leche en polvo según las instrucciones del paquete. Resultado casi idéntico a leche entera fresca."
      },
      {
        substitute: "Kéfir diluido con agua",
        notes: "Mezcla partes iguales de kéfir y agua para obtener consistencia de leche. Aporta un toque ácido que puede mejorar la levadura."
      }
    ]
  },
  {
    name: "Crema para batir",
    substitutions: [
      {
        substitute: "Coco crema (crema de coco espesa)",
        notes: "Refrigera una lata de leche de coco entera Overnight. Usa solo la parte sólida que se separa arriba. Bata hasta punto nieve. Aporta sabor a coco."
      },
      {
        substitute: "Leche evaporada engrosa con gelatina",
        notes: "Mezcla 1 taza de leche evaporada con 1 sobre de gelatina sin sabor hidratada. Refrigera hasta que espese y luego bate."
      },
      {
        substitute: "Queso crema batido con leche",
        notes: "Bate 200g de queso crema suave con 1/4 taza de leche fría hasta obtener merengue cremoso. No alcanza volumen igual que crema para batir."
      }
    ]
  },
  {
    name: "Crema agria",
    substitutions: [
      {
        substitute: "Yogur griego natural",
        notes: "Reemplazo directo en proporción 1:1. El yogur griego tiene textura y acidez muy similares a la crema agria."
      },
      {
        substitute: "Mantequilla derretida con vinagre",
        notes: "Derrete 1 taza de mantequilla, deja enfriar un poco y agrega 2 cucharadas de vinagre. Mezcla bien y reposa 5 minutos."
      },
      {
        substitute: "Crema para batir con jugo de limón",
        notes: "Añade 2 cucharadas de jugo de limón a una taza de crema espesa. Deja reposar 10 minutos hasta que se corte ligeramente."
      },
      {
        substitute: "Sour cream vegetal",
        notes: "Marcas veganas ofrecen crema agria a base de anacardos o coco. Uso directo en proporción 1:1."
      }
    ]
  },
  {
    name: "Miel",
    substitutions: [
      {
        substitute: "Jarabe de arce puro",
        notes: "Reemplazo directo en proporción 1:1. El jarabe de arce aporta un sabor diferente pero compatible en la mayoría de recetas dulces."
      },
      {
        substitute: "Azúcar morena disuelta con agua caliente",
        notes: "Disuelve 1 taza de azúcar morena en 1/4 de taza de agua caliente hasta obtener jarabe. Deja enfriar antes de usar."
      },
      {
        substitute: "Jarabe de agave",
        notes: "Uso directo 1:1. Tiene un sabor más neutro que la miel, adecuado cuando no se quiere el perfil de sabor floral."
      },
      {
        substitute: "Melaza ligera (treacle claro)",
        notes: "Usa en proporción 1:1 pero reduce la cantidad un 25% si usas melaza robusta por su sabor intenso. Ideal en galletas de jengibre y speculoos."
      }
    ]
  },
  {
    name: "Extracto de vainilla",
    substitutions: [
      {
        substitute: "Vainilla en pasta",
        notes: "Usa la misma cantidad que de extracto. La pasta contiene semillas reales de vainilla y aporta un sabor más intenso y visuales atractivas."
      },
      {
        substitute: "Ralladura de semilla de vaina de vainilla",
        notes: "Abre una vaina, ralla el interior con un cuchillo y úsala directamente. Equivale aproximadamente 1 cucharadita de semilla por cada teaspoon de extracto."
      },
      {
        substitute: "Azúcar avainillada casera",
        notes: "Entierra una vaina de vainilla abierta en el azúcar blanca durante al menos 2 semanas. Usa ese azúcar en la receta en su lugar."
      },
      {
        substitute: "Extracto de almendra",
        notes: "Usa solo la mitad de la cantidad indicada de vainilla, pues el extracto de almendra es más intenso. Aporta un perfil aromático diferente."
      }
    ]
  },
  {
    name: "Cacao en polvo",
    substitutions: [
      {
        substitute: "Chocolate negro rallado",
        notes: "Ralla fino chocolate negro al menos 70% cacao. Reduce el azúcar de la receta en 2 cucharadas por cada cucharada de cacao reemplazada."
      },
      {
        substitute: "Cacao en polvo sin azúcar otra marca (natural o alcalizado)",
        notes: "Si el original es natural y usas cacao Dutche procesado (alcalizado), reduce el polvo para hornear en 1/4 cucharadita por cada cucharada de cacao."
      },
      {
        substitute: "Nepo o tableta de chocolate negro rallada",
        notes: "Ralla la tableta fino. Reduce otros líquidos en 2 cucharadas y ajusta el azúcar según el dulzor del chocolate usado."
      }
    ]
  },
  {
    name: "Maicena",
    substitutions: [
      {
        substitute: "Harina todo uso (doble cantidad)",
        notes: "Usa el doble de harina que de maicena para lograr el mismo poder espesante. Por ejemplo, si necesitas 1 cucharada de maicena, usa 2 de harina."
      },
      {
        substitute: "Almidón de tapioca",
        notes: "Reemplazo directo 1:1 como espesante. Proporciona un brillo diferente y es apto para dietas sin gluten. Ideal en rellenos frutales."
      },
      {
        substitute: "Goma xantana (cantidad reducida)",
        notes: "Usa solo 1/4 de cucharadita por cada cucharada de maicena. Mezcla bien para evitar grumos. Funciona mejor en masas sin gluten."
      },
      {
        substitute: "Sémola fina tamizada",
        notes: "Tamiza dos veces para obtener textura fina. Úsala como espesante en proporción 1:1, pero el sabor será ligeramente diferente."
      }
    ]
  },
  {
    name: "Queso crema",
    substitutions: [
      {
        substitute: "Requesón tamizado",
        notes: "Pasa el requesón por un colador fino para obtener una textura suave y cremosa. Úsalo en proporción 1:1."
      },
      {
        substitute: "Ricotta tamizada con un toque de limón",
        notes: "Tamiza la ricotta y mezcla con 1/2 cucharadita de jugo de limón por cada taza para ajustar la acidez. Consistencia similar en proporción 1:1."
      },
      {
        substitute: "Yogur griego mezclado con mantequilla suave",
        notes: "Combina 3/4 de taza de yogur griego natural con 1/4 de taza de mantequilla ablandada. Bate hasta que quede homogéneo."
      },
      {
        substitute: "Queso crema vegano",
        notes: "Marcas como Miyoko's o Violife ofrecen alternativas veganas. Uso directo en proporción 1:1. Revisa que sea apto para horneado."
      }
    ]
  },
  {
    name: "Aceite vegetal",
    substitutions: [
      {
        substitute: "Mantequilla derretida",
        notes: "Usa en proporción 1:1. La mantequilla aporta sabor rico pero puede cambiar ligeramente la textura, haciéndola más firme al enfriarse."
      },
      {
        substitute: "Aceite de girasol sin refinar suave",
        notes: "Reemplazo directo 1:1 si es refinado (de sabor neutro). Evita aceite tostado o virgen fuerte en recetas delicadas."
      },
      {
        substitute: "Puré de manzana (applesauce)",
        notes: "Reemplaza la mitad del aceite con puré de manzana sin azúcar para reducir grasa. El resultado será más húmedo y denso."
      },
      {
        substitute: "Aceite de oliva suave",
        notes: "Usa solo en recetas donde el sabor no se note, como bizcochos densos o pasteles de especias. Evítalo en merengues y recetas claras."
      }
    ]
  },
  {
    name: "Yogur",
    substitutions: [
      {
        substitute: "Kéfir",
        notes: "Reemplazo directo en proporción 1:1. El kéfir es ligeramente más ácido y líquido; ajusta otros líquidos si el resultado queda muy húmedo."
      },
      {
        substitute: "Crema agria diluida con leche",
        notes: "Mezcla partes iguales de crema agria y leche hasta obtener la consistencia deseada. Aporta acidez similar."
      },
      {
        substitute: "Leche agria espesa",
        notes: "Usa buttermilk engrosado con un poco de harina (1 cucharadita por taza). Proporciona una textura más cercana al yogur natural."
      },
      {
        substitute: "Yogur vegano de anacardos o coco",
        notes: "Las versiones vegetales sin azúcar funcionan en proporción 1:1. Elige marcas con alta consistencia para recetas que requieran cuerpo."
      }
    ]
  }
];

// ──────────────────────────────────────────────
// LOOKUP UTILITIES
// ──────────────────────────────────────────────

/**
 * Finds an ingredient by name, returning the exact match if one exists
 * and a ranked list of close (substring) matches.
 *
 * Matching is case-insensitive. Each word in the query is checked against
 * the ingredient name, and a score is computed based on how many query
 * words appear in the ingredient's name.
 *
 * @param {string} query - The search term entered by the user.
 * @returns {{exactMatch: object|null, closeMatches: Array<{name: string, score: number}>}}
 */
export function findIngredient(query) {
  if (!query || typeof query !== "string" || query.trim() === "") {
    return { exactMatch: null, closeMatches: [] };
  }

  const trimmed = query.trim().toLowerCase();
  const words = trimmed.split(/\s+/).filter(Boolean);

  // Check for an exact match first.
  const exactMatch = INGREDIENTS.find(
    (ing) => ing.name.toLowerCase() === trimmed
  );

  if (exactMatch) {
    return { exactMatch, closeMatches: [] };
  }

  // Score each ingredient by how many query words appear in its name.
  const scored = INGREDIENTS.map((ing) => {
    const lowerName = ing.name.toLowerCase();
    const matchedWords = words.filter((word) => lowerName.includes(word));
    const score = matchedWords.length;
    return { name: ing.name, score };
  });

  // Filter to only those with at least one word match, then sort by score descending.
  const closeMatches = scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return { exactMatch: null, closeMatches };
}
