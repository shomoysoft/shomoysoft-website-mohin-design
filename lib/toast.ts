type ToastType = "success" | "error" | "info" | "warning"

export function showToast(type: ToastType, message: string) {
  // Simple toast implementation using browser alert for now
  // In production, you'd want to use a proper toast library like react-hot-toast or sonner
  if (typeof window !== "undefined") {
    const emoji = {
      success: "✅",
      error: "❌",
      info: "ℹ️",
      warning: "⚠️",
    }[type]

    alert(`${emoji} ${message}`)
  }
}
