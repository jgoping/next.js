let policy: TrustedTypePolicy | undefined

function getPolicy() {
  if (!policy && typeof window !== 'undefined') {
    policy = window.trustedTypes?.createPolicy('nextjs', {
      createHTML: (input) => input,
      createScript: (input) => input,
      createScriptURL: (input) => input,
    })
  }

  return policy
}

export function __unsafeCreateTrustedScriptURL(
  url: string
): TrustedScriptURL | string {
  return getPolicy()?.createScriptURL(url) ?? url
}
