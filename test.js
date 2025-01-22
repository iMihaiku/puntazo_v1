function levenshteinDistance(str1, str2) {
  console.time('Tiempo total') // Inicia el cronómetro

  // Crear matriz
  console.time('Inicialización de la matriz')
  const dp = Array(str1.length + 1)
    .fill(null)
    .map(() => Array(str2.length + 1).fill(null))
  console.timeEnd('Inicialización de la matriz')

  // Inicializar bordes
  console.time('Inicialización de bordes')
  for (let i = 0; i <= str1.length; i++) {
    dp[i][0] = i
  }
  for (let j = 0; j <= str2.length; j++) {
    dp[0][j] = j
  }
  console.timeEnd('Inicialización de bordes')

  // Llenar la matriz con el algoritmo
  console.time('Cálculo de la matriz')
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1, // Eliminación
        dp[i][j - 1] + 1, // Inserción
        dp[i - 1][j - 1] + cost // Sustitución
      )
    }
  }
  console.timeEnd('Cálculo de la matriz')

  // Finalizar y devolver el resultado
  const result = dp[str1.length][str2.length]
  console.timeEnd('Tiempo total')
  return result
}

console.log('Distancia de Levenshtein:', levenshteinDistance('gato', 'pato'))
