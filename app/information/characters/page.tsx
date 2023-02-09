import { Routes } from '@/app/models/routes.model';
import { Card, Navigator } from '@/components';
import { getCharacters } from './services';

async function fetchCharacters() {
  return await getCharacters();
}

async function Character() {
  const characters = await fetchCharacters();
  return (
    <>
    <Navigator pathNames={[Routes.HOME, Routes.LOCATIONS]} />
    {characters.map(character => <Card key={character.id} data={character} />)}
    </>
  )
}

export default Character;