import { techList } from '../content/tech'

export const getTech = techUsed => {
  const findObj = lookup => {
    const category = techList.find(tech => tech.items.find(item => item.name.toLowerCase() === lookup.toLowerCase()));
    const i = category?.items.findIndex(item => item.name.toLowerCase() === lookup.toLowerCase());
    return category?.items[i];
  }

  return techUsed.map(tech => findObj(tech));
}

