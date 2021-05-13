var countBits = function(n) {
   const base = (n).toString(2).split('');
     
   return base.reduce((sum, num) => sum + Number(num), 0);;
};