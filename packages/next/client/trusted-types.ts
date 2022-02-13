let policy: TrustedTypePolicy | null | undefined

function getPolicy() {
  if (typeof policy === 'undefined' && typeof window !== 'undefined') {
    policy =
      window.trustedTypes?.createPolicy('nextjs', {
        createHTML: (input) => input,
        createScript: (input) => input,
        createScriptURL: (input) => input,
      }) || null
  }

  return policy
}

export function __unsafeCreateTrustedScriptURL(
  url: string
): TrustedScriptURL | string {
  return getPolicy()?.createScriptURL(url) || url
}
