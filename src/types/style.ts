export interface StyleData {
  name: string
  desc: string
  prompt: string
  keywords: string
  bg: string
  text: string
  card: string
  button: string
  buttonSec: string
  input: string
  highlight: string
  badge: string
  font: string
}

export type StylesMap = Record<string, StyleData>
