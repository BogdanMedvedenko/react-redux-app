import React from "react"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"

// Заглушка reducer (если нет своего)
const reducer = (state = {}) => state

export function renderWithProviders(
  ui: React.ReactElement,
  {
    store = configureStore({ reducer }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions })
}