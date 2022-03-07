import { Tabs } from '@supabase/ui'
import { useRouter } from 'next/router'

const FunctionsNav = () => {
  const router = useRouter()
  const activeRoute = router.pathname.split('/')[5]
  const { ref } = router.query
  console.log('activeRoute', activeRoute)

  return (
    <Tabs
      defaultActiveId="1"
      type="underlined"
      size="medium"
      activeId={!activeRoute ? 'metrics' : activeRoute}
      onChange={(e: string) =>
        router.push(`/project/${ref}/functions/hello-world/${e === 'metrics' ? '' : e}`)
      }
    >
      <Tabs.Panel id="metrics" label="Metrics" />
      <Tabs.Panel id="details" label="Details" />
      <Tabs.Panel id="triggers" label="Triggers" />
      <Tabs.Panel id="logs" label="Invocation logs" />
    </Tabs>
  )
}

export default FunctionsNav