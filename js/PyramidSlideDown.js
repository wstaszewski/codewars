function longestSlideDown (pyramid) {
    return pyramid.reduceRight((l,c)=>c.map(
    (v,i)=>v+Math.max(l[i],l[i+1])
  ))[0];
}