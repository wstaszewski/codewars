function cakes(recipe, available) {
  
  return Object.keys(recipe).reduce(function(value, ing) {
        return Math.min(Math.floor(available[ing] / recipe[ing] || 0), value)
      }, Infinity)  
  
}