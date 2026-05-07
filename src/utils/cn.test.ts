import { cn } from './cn'

describe('cn', () => {
  // --- Базовые типы ---

  describe('строки', () => {
    it('возвращает строку как есть', () => {
      expect(cn('foo')).toBe('foo')
    })

    it('объединяет несколько строк', () => {
      expect(cn('foo', 'bar', 'baz')).toBe('foo bar baz')
    })

    it('игнорирует пустую строку', () => {
      expect(cn('foo', '', 'bar')).toBe('foo bar')
    })
  })

  describe('числа', () => {
    it('преобразует число в строку', () => {
      expect(cn(42)).toBe('42')
    })

    it('обрабатывает 0 как валидное значение', () => {
      expect(cn(0)).toBe('0')
    })
  })

  describe('булевы значения', () => {
    it('игнорирует true', () => {
      expect(cn(true)).toBe('')
    })

    it('игнорирует false', () => {
      expect(cn(false)).toBe('')
    })
  })

  describe('null и undefined', () => {
    it('игнорирует null', () => {
      expect(cn(null)).toBe('')
    })

    it('игнорирует undefined', () => {
      expect(cn(undefined)).toBe('')
    })

    it('игнорирует null среди валидных значений', () => {
      expect(cn('foo', null, 'bar')).toBe('foo bar')
    })

    it('игнорирует undefined среди валидных значений', () => {
      expect(cn('foo', undefined, 'bar')).toBe('foo bar')
    })
  })

  // --- Объекты ---

  describe('объекты', () => {
    it('добавляет ключ если значение true', () => {
      expect(cn({ foo: true })).toBe('foo')
    })

    it('не добавляет ключ если значение false', () => {
      expect(cn({ foo: false })).toBe('')
    })

    it('не добавляет ключ если значение null', () => {
      expect(cn({ foo: null })).toBe('')
    })

    it('не добавляет ключ если значение undefined', () => {
      expect(cn({ foo: undefined })).toBe('')
    })

    it('обрабатывает несколько ключей', () => {
      expect(cn({ foo: true, bar: false, baz: true })).toBe('foo baz')
    })
  })

  // --- Массивы ---

  describe('массивы', () => {
    it('обрабатывает массив строк', () => {
      expect(cn(['foo', 'bar'])).toBe('foo bar')
    })

    it('обрабатывает вложенные массивы', () => {
      expect(cn(['foo', ['bar', 'baz']])).toBe('foo bar baz')
    })

    it('игнорирует falsy значения в массиве', () => {
      expect(cn(['foo', null, undefined, false, 'bar'])).toBe('foo bar')
    })

    it('обрабатывает массив с объектами', () => {
      expect(cn([{ foo: true, bar: false }, 'baz'])).toBe('foo baz')
    })
  })

  // --- Комбинации ---

  describe('комбинации', () => {
    it('смешивает строки и объекты', () => {
      expect(cn('foo', { bar: true, baz: false })).toBe('foo bar')
    })

    it('смешивает строки, объекты и массивы', () => {
      expect(cn('foo', { bar: true }, ['baz', { qux: true }])).toBe(
        'foo bar baz qux',
      )
    })

    it('возвращает пустую строку если все значения falsy', () => {
      expect(cn(null, undefined, false, '')).toBe('')
    })

    it('не добавляет лишние пробелы', () => {
      const result = cn('foo', 'bar')
      expect(result).not.toMatch(/\s{2,}/)
    })
  })

  // --- Граничные случаи ---

  describe('граничные случаи', () => {
    it('возвращает пустую строку без аргументов', () => {
      expect(cn()).toBe('')
    })

    it('обрабатывает глубоко вложенные массивы', () => {
      expect(cn([[[['foo']]]])).toBe('foo')
    })

    it('обрабатывает большое количество аргументов', () => {
      const args = Array.from({ length: 100 }, (_, i) => `class-${i}`)
      const result = cn(...args)
      expect(result.split(' ')).toHaveLength(100)
    })
  })
})
