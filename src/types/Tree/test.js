import Tree from "./index";

const search = (tree, term, searchType)=> {
  let result = null;
  tree.contains(function (node) {
    if (node.data === term) {
      result = node;
    }
  }, searchType);

  return result;
}

describe("Tree Data Structure",()=>{
  it("can add a node to the tree using Depth First traversion",()=>{
    var tree = new Tree('CEO');

    tree.add('VP of Happiness', 'CEO', tree.traverseDF);

    let result = null;

    result = search(tree,"VP of Happiness", tree.traverseDF)
    expect(tree.root).toBeDefined()
    expect(result).toBeDefined()
    expect(result.parent.data).toBe("CEO");
  });

  it("can add a node to another node with Depth first",()=>{
    var tree = new Tree('CEO');

    tree.add('VP of Happiness', 'CEO', tree.traverseDF);

    let result = null;

    result = search(tree,"VP of Happiness", tree.traverseDF)
    expect(tree.root).toBeDefined()
    expect(result).toBeDefined()
    expect(result.parent.data).toBe("CEO");

    tree.add("CTO", "VP of Happiness", tree.traverseDF)

    result = search(tree,"CTO",tree.traverseDF);
    expect(result).toBeDefined();
    expect(result.data).toBe("CTO");
    expect(result.parent.data).toBe("VP of Happiness");
  })

  it("Adds with breadth first traversion",()=>{
    const tree= new Tree("CEO");

    tree.add('VP of Happiness', 'CEO', tree.traverseBF);
    tree.add('VP of Finance', 'CEO', tree.traverseBF);
    tree.add('VP of Sadness', 'CEO', tree.traverseBF);

    tree.add('Director of Puppies', 'VP of Finance', tree.traverseBF);
    tree.add('Manager of Puppies', 'Director of Puppies', tree.traverseBF);

    let result = search(tree, "Manager of Puppies", tree.traverseBF);
    expect(result).toBeDefined();
    expect(result.parent).toBeDefined();
    expect(result.parent.data).toBe("Director of Puppies");
  })

  it("removes a node",()=>{
    const tree= new Tree("CEO");

    tree.add('VP of Happiness', 'CEO', tree.traverseBF);
    let result = search(tree, "VP of Happiness", tree.traverseBF);
    expect(result).toBeDefined();
    expect(result.data).toBe("VP of Happiness");

    tree.remove("VP of Happiness","CEO", tree.traverseBF)
    debugger
    result = search(tree, "CEO",  tree.traverseBF);
    expect(result.children.length).toBe(0);

  })
});