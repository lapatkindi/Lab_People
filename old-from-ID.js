module.exports = {
    MainFunct: (id, list)  => {
        const findIndex = (v, a) => list.findIndex(e => e.ID == v);

        const idx = findIndex(id);        
        if (idx === -1) return 'Такого человека не существует';

        function maxDepth(node, num) {
          const mother = findIndex(node.mother);
          const father = findIndex(node.father);

          if (mother === -1 || father === -1)
            return { num: num, user: node };

          if (mother !== -1 && father !== -1){
            const f = maxDepth(list[father], num + 1);
            const m = maxDepth(list[mother], num + 1);
            return f.num > m.num ? f : m;
          }
          
          return maxDepth(list[father !== -1 ? father : mother], num + 1).num;
        }
        return maxDepth(list[idx], 0);
    },
}