import { FormFieldLayoutProps } from './_layout/types.ts'

export const getGridColumnStyle = (grid: FormFieldLayoutProps['grid']) =>
  grid ? { gridColumn: grid === 'full' ? '-1 / 1' : grid } : undefined

/**
 *  Mask the data with asterisks
 *
 * @param {string | number | null} [data]
 * @param {number} [maskOffset]
 * @returns {string}
 */
export const maskWithAsterisk = (data?: string | number | null, maskOffset: number = 4): string => {
  if (!data) return ''
  return data.toString().replace(/.(?=.{0,}$)/g, (match, offset) => (offset < maskOffset ? match : '*'))
}
