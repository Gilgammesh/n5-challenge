import { renderHook } from '@testing-library/react'
import useCharacters from '../../src/hooks/useCharacters'

describe('Tests in hook: useCharacters.tsx', () => {
  test('You must return a list of movie characters', () => {
    const cast = [
      {
        adult: false,
        gender: 2,
        id: 1186076,
        known_for_department: 'Acting',
        name: 'Philippe Lacheau',
        original_name: 'Philippe Lacheau',
        popularity: 13.195,
        profile_path: '/2ev0Ip2vNnC5UYe10gJNcApahZ4.jpg',
        cast_id: 1,
        character: 'Cédric "Badman"',
        credit_id: '5f6c6a88663b8700393652b2',
        order: 0
      },
      {
        adult: false,
        gender: 2,
        id: 1291810,
        known_for_department: 'Acting',
        name: 'Julien Arruti',
        original_name: 'Julien Arruti',
        popularity: 2.178,
        profile_path: '/rea7DU5SH9wpWNMe6QpHBnn6Kzf.jpg',
        cast_id: 3,
        character: 'Seb',
        credit_id: '5f6c6aa4688cd000372c5ea9',
        order: 1
      }
    ]
    const id = 123
    const lang = 'es'
    const { result } = renderHook(() => useCharacters(id, lang))
    const { characters } = result.current
    expect(characters).toBe(cast)
  })
})
