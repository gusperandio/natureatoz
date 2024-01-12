export function filterItems(items: any[]): any[]{
  return items.map((item: any) => {
    delete item._id;
    delete item.__v;
    delete item.letter;
    return item;
  });
}