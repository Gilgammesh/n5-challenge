import { renderHook } from '@testing-library/react'
import useCharacters from '../../src/hooks/useCharacters'

describe('Tests in hook: useCharacters.tsx', () => {
  test('You must return a list of serie characters', () => {
    const cast = [
      {
        adult: false,
        gender: 1,
        id: 1920,
        known_for_department: 'Acting',
        name: 'Winona Ryder',
        original_name: 'Winona Ryder',
        popularity: 44.573,
        profile_path: '/5yteOSY2lgGOgSWmRTlxqfY59MS.jpg',
        character: 'Joyce Byers',
        credit_id: '5759b97bc3a3684ea90029c1',
        order: 0
      },
      {
        adult: false,
        gender: 2,
        id: 35029,
        known_for_department: 'Acting',
        name: 'David Harbour',
        original_name: 'David Harbour',
        popularity: 22.969,
        profile_path: '/chPekukMF5SNnW6b22NbYPqAStr.jpg',
        character: 'Jim Hopper',
        credit_id: '5759b986c3a3683e7c003967',
        order: 1
      }
    ]
    const id = 456
    const lang = 'es'
    const { result } = renderHook(() => useCharacters(id, lang))
    const { characters } = result.current
    expect(characters).toBe(cast)
  })
})
