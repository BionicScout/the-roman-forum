import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ i18n }: QuartzComponentProps) => {
  return (
    <div class="not-found">
      <p>This page doesn't exist. Please return back to the main page.</p>
      <a href="/" class="internal">Go back to home</a>
    </div>
  )
}

export default (() => {
  return {
    content: NotFound,
    title: "Page Not Found",
  }
}) satisfies QuartzComponentConstructor
