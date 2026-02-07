/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Body as Body, Link as Link, Link as Link_1, Form as Form } from "@webstudio-is/sdk-components-react-router";
import { NavigationMenu as NavigationMenu, NavigationMenuList as NavigationMenuList, NavigationMenuItem as NavigationMenuItem, NavigationMenuLink as NavigationMenuLink, NavigationMenuViewport as NavigationMenuViewport, Accordion as Accordion, AccordionItem as AccordionItem, AccordionHeader as AccordionHeader, AccordionTrigger as AccordionTrigger, AccordionContent as AccordionContent, Label as Label, NavigationMenuTrigger as NavigationMenuTrigger, NavigationMenuContent as NavigationMenuContent } from "@webstudio-is/sdk-components-react-radix";
import { Box as Box, Fragment as Fragment_1, HtmlEmbed as HtmlEmbed, Image as Image, Slot as Slot, MarkdownEmbed as MarkdownEmbed, Text as Text, Textarea as Textarea, Input as Input, Select as Select, Button as Button, Paragraph as Paragraph } from "@webstudio-is/sdk-components-react";


      export const projectId = "b76c7430-2a95-4845-aeef-095a5acae881";

      export const lastPublished = "2026-02-07T11:31:42.935Z";

      export const siteName = "Devmat Solutions PC – Easy, Powerful, Intelligent";

      export const breakpoints = [{"id":"IOEBbQqW2Zb9XucSe4u8N"},{"id":"DbhVpmYVsZWuN8eaww6JI","maxWidth":991},{"id":"C3TGAnuYbFrXJRwOz5IBY","maxWidth":767},{"id":"Cau1OpnQLcB8-xVPpUhsW","maxWidth":479}];

      export const favIconAsset: string | undefined =
        "favicon_APM-vqgr8Z9I7VmPQSXYr_vdkAt5PAsc3Yrv-eO-IZd.png";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        ["Monoton-Regular_2wnBBOU8x4IpGGenJ_aES.ttf"]

      export const pageBackgroundImageAssets: string[] =
        []

      
            

            export const CustomCode = () => {
              return (<></>);
            }
          

      const Page = (_props: { system: any; }) => {
let REQsitestate = useResource("REQsitestate_1")
let REQNavigation = useResource("REQNavigation_1")
let REQHomePage = useResource("REQHomePage_1")
let [URLcmsMediaLocal, set$URLcmsMediaLocal] = useVariableState<any>("https://admin.devmat.spirosroadto.info")
let REQBenfitsDevmat = useResource("REQBenfitsDevmat_1")
let REQGetStartedSteps = useResource("REQGetStartedSteps_1")
let REQSolutions = useResource("REQSolutions_1")
let REQClientReviews = useResource("REQClientReviews_1")
let REQFAQs = useResource("REQFAQs_1")
let [formState, set$formState] = useVariableState<any>("initial")
let REQfooter = useResource("REQfooter_1")
let REQSocial = useResource("REQSocial_1")
let REQContactInfo = useResource("REQContactInfo_1")
return <Body
className={`w-element c1pk2abd c1om2ni4 c1t9kc3 caxks0e c17l107q c1axzkds cpofr2j c1lflnfx cpf8n67`}>
<section
className={`w-element c1f5y87x c1y6e6gy c1xz0hfv c1nn1c1j c1nnj4xy caui1hn`}>
<NavigationMenu
className={`w-navigation-menu c1gbr3z6 c1b9a0j2 cyksmbj c1rc0m8f c1q7lfpp ciexhcn c1oji2iw crw0x0i c7k78s6 cz4er6w c1jfats1`}>
<Link_1
href={REQsitestate?.data?.data?.websiteURL}
target={"_self"}
title={REQsitestate?.data?.data?.websiteURL}
className={`w-element cu2xsck cqjwob8`}>
<div
className={`w-element c1anbojs c1kgg7oc c1uyinf6 c1wdeocc c4cayoo c53v5zz c1f5y87x c1y6e6gy cj79p55 c13mijno c1m8wuxn c1c9qrtl cu9hx8o`}>
{"Devmat Solutions PC"}
</div>
</Link_1>
<NavigationMenuList
className={`w-menu-list c1wdeocc c4kj7kl c4cayoo c7d4aiq cyksmbj c19ayrcm cm1hduf c9ki4md c1sdaeb8 c1oji2iw c7pv373 c18tswnh c1avjyiw cyh8saq c98ze20`}>
<Box
className={`w-box c1ca1opd cbixgik c1h8kc0m cyksmbj c7pv373 cojslek`}>
<NavigationMenuViewport
className={`w-menu-viewport c1gbr3z6 c15k0oe7 c1pwlyx4 ctvij5o c1scatng c12dglsd c18cn36h c1s0vdhp c1tu7rdi cse038c chhklim c1xib519 c8343zk c1s43d56`} />
</Box>
{Object.entries(
  // @ts-ignore
  REQNavigation?.data?.data?.navbar?.navlink ?? {}
).map(([_key, collectionItem]: any) => {
  const collectionItemKey_1 = Array.isArray(REQNavigation?.data?.data?.navbar?.navlink) ? Number(_key) : _key;
  return (
<Fragment key={collectionItemKey_1}>
<div
className={`w-element`}>
{(!collectionItem?.subnav?.length) &&
<NavigationMenuItem
data-ws-index="0"
className={`w-menu-item`}>
<NavigationMenuLink>
<Link
target={collectionItem?.target}
href={collectionItem?.href}
title={collectionItem?.href}
className={`w-link ccqry52 c1oji2iw c7pv373 c199gza7 c1scatng c12dglsd c18cn36h c1s0vdhp cc3itzg cu15652 cyjqqjx c152iurg c15q8tho c1kh7ybw c1rwsfc4 c16v3bxy cqjwob8 c53v5zz cwl22p7 c6i07qh c16vucp1 c10wx85o c1q4fk80 cbq1r21 c3928kp c1jwpyv4`}>
{collectionItem?.name}
</Link>
</NavigationMenuLink>
</NavigationMenuItem>
}
{(!!collectionItem?.subnav?.length) &&
<NavigationMenuItem
data-ws-index="1"
className={`w-menu-item`}>
<NavigationMenuTrigger>
<Button
className={`w-button ccqry52 c1oji2iw c7pv373 c199gza7 c1scatng c12dglsd c18cn36h c1s0vdhp cc3itzg cu15652 cyjqqjx c152iurg c15q8tho c1kh7ybw c1rwsfc4 c16v3bxy c1qj3xb5 cwl22p7 c6i07qh c16vucp1 c10wx85o c1q4fk80 cbq1r21 c3928kp c1jwpyv4 c1frugua`}>
<Text
className={`w-text c53v5zz`}>
{collectionItem?.name}
</Text>
<Box
className={`w-box c1jfsl5 cv7jg5f c15h8iyp c1ilvq6h cleis16 c1eqwf0y czk77kp c2lasyc cdjvvc8 c1o70tqg`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m4 6 4 4 4-4\"/></svg>"}
className={`w-html-embed`} />
</Box>
</Button>
</NavigationMenuTrigger>
<NavigationMenuContent
className={`w-menu-content cbixgik c1hvks5x c1pvcg4w coyh8d5 c1nalyre`}>
<Box
className={`w-box cyksmbj c125js0i c9ei9hc cuxtrnq`}>
<Box
className={`w-box c10kvjaq cyksmbj c125js0i c9ei9hc c1i7snbb`}>
{Object.entries(
  // @ts-ignore
  collectionItem?.subnav ?? {}
).map(([_key, collectionItem_1]: any) => {
  const collectionItemKey = Array.isArray(collectionItem?.subnav) ? Number(_key) : _key;
  return (
<Fragment key={collectionItemKey}>
<NavigationMenuLink>
<Link
href={collectionItem_1?.href}
target={collectionItem_1?.target}
title={collectionItem_1?.href}
className={`w-link c1tjie79 cyksmbj c1i7snbb clbsjag c18tswnh c1avjyiw c1scatng c12dglsd c18cn36h c1s0vdhp c1n9d4u8 cqjwob8 c1b9nnoh cpxva6b c3928kp c1jwpyv4 cfn2ywy c2bousg`}>
<Text
className={`w-text cc3itzg cyjqqjx c1n9d4u8`}>
{collectionItem_1?.name}
</Text>
{(!!collectionItem_1?.description) &&
<Paragraph
className={`w-paragraph c1pwlyx4 ctvij5o c5cr60h c8lqbwc c1gq6vpr cc3itzg c12rzb79 c14nvnl5 cyh8saq`}>
{collectionItem_1?.description}
</Paragraph>
}
</Link>
</NavigationMenuLink>
</Fragment>
)
})
}
</Box>
</Box>
</NavigationMenuContent>
</NavigationMenuItem>
}
</div>
</Fragment>
)
})
}
<NavigationMenuItem
data-ws-index="2"
className={`w-menu-item cbanl4k`}>
<NavigationMenuLink>
{(!!REQNavigation?.data?.data?.specialLink) &&
<Link
href={REQNavigation?.data?.data?.specialLink?.href}
target={REQNavigation?.data?.data?.specialLink?.target}
title={REQNavigation?.data?.data?.specialLink?.href}
className={`w-link ccqry52 c1oji2iw c7pv373 cyidosu cfxgbuw c1w3iq2x cmd2k6o c1aefk7h cc3itzg cu15652 cyjqqjx c152iurg c15q8tho c1kh7ybw c1rwsfc4 c16v3bxy cqjwob8 c1ox04z8 c1eqwf0y czk77kp c1lc8yfv c1mucujo c1o70tqg c1t98528 c6i07qh c16vucp1 c10wx85o c1q4fk80 cbq1r21 c11r2gzv ca9pb38`}>
{"Book a demo"}
</Link>
}
</NavigationMenuLink>
</NavigationMenuItem>
</NavigationMenuList>
</NavigationMenu>
</section>
<section
className={`w-element c1f5y87x c1y6e6gy c1xz0hfv c1nn1c1j cyidosu cu3uc3t cqkrgkz c3vcdka c1ht3eul cjocp00 c190h4xw c1ua5e08 c1rt2b5x celrewe ceuzb9a`}>
{(!!REQHomePage?.data?.data?.heroSection?.heroMedia?.[0]) &&
<div
className={`w-element c1321bjb c140tk4r cavlpe c1ox04z8 cyksmbj c1i7snbb c1oji2iw c7pv373`}>
<h1
className={`w-element c1fh2qkn cyiizu9 cqvjdig crmjlkc c1ihasyt c3c9r1c cpii4el c19jcr0r c1fb947j c1l3k9y7`}>
{REQHomePage?.data?.data?.heroSection?.heroTitle}
</h1>
<p
className={`w-element c3c9r1c c1ihasyt c1fq6v54 cpf8n67 c1s55wh8 c19z55ud`}>
{REQHomePage?.data?.data?.heroSection?.heroSubTitle}
</p>
<div
className={`w-element cyksmbj c1przhxw c1oji2iw c7pv373 c18htm2o c41c50e c1i7yiwk c13n5siq ch2shl c19z55ud cynjatq`}>
{(!!REQHomePage?.data?.data?.heroSection?.leftButton?.title) &&
<Link_1
href={REQHomePage?.data?.data?.heroSection?.leftButton?.href}
target={REQHomePage?.data?.data?.heroSection?.leftButton?.target}
title={REQHomePage?.data?.data?.heroSection?.leftButton?.href}
className={`w-element cu2xsck cfxgbuw c1w3iq2x c1aefk7h cmd2k6o c1wbt3eu cxjyi5z c1kd0iqv c2t1vc3 cmx5vkr c53v5zz c1vld03m cls8btf c17l107q c1axzkds cpofr2j c1lflnfx cqce9pz c1nwamx6 cqjwob8`}>
{REQHomePage?.data?.data?.heroSection?.leftButton?.title}
</Link_1>
}
{(!!REQHomePage?.data?.data?.heroSection?.rightButton?.title) &&
<Link_1
title={REQHomePage?.data?.data?.heroSection?.rightButton?.href}
href={REQHomePage?.data?.data?.heroSection?.rightButton?.href}
target={REQHomePage?.data?.data?.heroSection?.rightButton?.target}
className={`w-element cu2xsck cfxgbuw c1w3iq2x c1aefk7h cmd2k6o c1pk2abd c1om2ni4 c1t9kc3 caxks0e c199gza7 c1ox04z8 c1vld03m cls8btf c17l107q c1axzkds cpofr2j c1lflnfx cqce9pz c1nwamx6 cqjwob8`}>
{REQHomePage?.data?.data?.heroSection?.rightButton?.title}
</Link_1>
}
</div>
{(!!REQHomePage?.data?.data?.heroSection?.heroMedia?.length) &&
<Box
className={`w-box chwyzxr cc65596 c8h0kd1 c1jmoocp c1ulw3bq cc6w7r cnzj5wj`}>
<Box
data-slides-per-view={"1"}
data-infinite-loop={"true"}
data-nav={"true"}
data-nav-next-el={".swiper-button-next"}
data-nav-prev-el={".swiper-button-prev"}
data-swiper={"true"}
data-parallax={"true"}
data-slider-speed={"750"}
data-autoplay={"true"}
data-autoplay-delay={""}
className={`w-box c1jmoocp c1gbr3z6 c1xz0hfv c1nn1c1j c14ukf1q cb38r9g c1pwlyx4 ctvij5o c1przhxw c1i7snbb c1oaz3g3 c1oji2iw c9z7hxy c9iayub c1550nn1 czqdj2f co4edm4 c1fpr0os ${"swiper swiper-c-auto"}`}>
<Box
className={`w-box c1przhxw c1gbr3z6 c14ukf1q c9z7hxy cyksmbj cgocsqs ceh8ohp c1jmoocp cvgvkkz coy7gv6 ${"swiper-wrapper"}`}>
{Object.entries(
  // @ts-ignore
  REQHomePage?.data?.data?.heroSection?.heroMedia ?? {}
).map(([_key, collectionItem_2]: any) => {
  const index_2 = Array.isArray(REQHomePage?.data?.data?.heroSection?.heroMedia) ? Number(_key) : _key;
  return (
<Fragment key={index_2}>
<Box
className={`w-box c1a7h4u9 c1gbr3z6 c1przhxw cleis16 c6s2mb7 c1pwlyx4 ctvij5o czsacc7 c6pmyha ${"swiper-slide"}`}>
<Box
className={`w-box cjtheg6 clmafat c1rkdu33 c2i0qoz c1f5j10l cmk688s cejznww cp88vo0 c9iayub c1550nn1 czqdj2f co4edm4 cl3a54z cyksmbj c1tu7rdi c1oji2iw c7pv373 c1i7snbb c1a7h4u9 c1pwlyx4 ctvij5o cqwy470 c1mkwpu4 c18ym91p cb6svwg c1otp91o`}>
<Image
data-swiper-parallax={"75%"}
data-swiper-parallax-scale={"1.1"}
optimize={false}
src={URLcmsMediaLocal+collectionItem_2?.url}
alt={collectionItem_2?.alternativeText}
className={`w-image c1ca1opd cyiufop c12t5nos c1jmoocp c1a7h4u9 c1przhxw cgtklm7 cgzsvfq c1gkl50b`} />
<Box
className={`w-box cyksmbj c1i7snbb c125js0i cgocsqs c7m897 c1oaz3g3 cpstobg c1m9hz2e c3qj012 c1vhk8r2 cfoyo6b ctqyu0d c1su9msf c1ca1opd c1iqp751 ctoeblo c1c40y1i c7ghkhh c194hou3 c13pklef c16caxk5`} />
</Box>
</Box>
</Fragment>
)
})
}
</Box>
<Box
className={`w-box c1ca1opd cibahxt c1gqsx5u cyksmbj c1rrbixb c1oaz3g3 c9z7hxy cu4g92s c6lxvrw chkjoc1 c172hey ccsqwz c18cfxvo c7wa604 c1ajz4hn crtf4qo c11c9uoh`}>
<Box
className={`w-box c1maz3g9 cyksmbj c1oji2iw c7pv373 c292i9b cxl0o9s cdfpp7e co80yic c57zjvh c143tev2 c16mb7nx c1gbr3z6 c11ti0jn cmaxjvo c1dx8b2v c1qrp8v2 c12c2zig clr6biy c1d70lvb cvj1e6d ${"swiper-button-prev"}`}>
<HtmlEmbed
code={"<svg viewBox=\"0 0 24 24\" x=\"0\" y=\"0\" width=\"1em\" height=\"1em\"><g transform=\"matrix(-1,0,0,1,24.17136001586914,0)\"><path fill=\"currentColor\" d=\"M7.412 24 6 22.588l9.881-9.881a1 1 0 0 0 0-1.414L6.017 1.431 7.431.017l9.862 9.862a3 3 0 0 1 0 4.242Z\" opacity=\"1\" data-original=\"#000000\" class=\"\"></path></g></svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box c1maz3g9 cyksmbj c1oji2iw c7pv373 c292i9b cxl0o9s cdfpp7e co80yic c57zjvh c143tev2 c16mb7nx c1gbr3z6 c11ti0jn cm241ru cmaxjvo c1dx8b2v c1qrp8v2 c12c2zig clr6biy c1d70lvb cvj1e6d c8n6rm ${"swiper-button-next"}`}>
<HtmlEmbed
code={"<svg viewBox=\"0 0 24 24\" width=\"1em\" height=\"1em\"><path fill=\"currentColor\" d=\"M7.412,24,6,22.588l9.881-9.881a1,1,0,0,0,0-1.414L6.017,1.431,7.431.017l9.862,9.862a3,3,0,0,1,0,4.242Z\"></path></svg>"}
className={`w-html-embed`} />
</Box>
</Box>
</Box>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<script src=\"https://unpkg.com/swiper/swiper-bundle.min.js\" defer=\"\"></script>\n<script type=\"module\">\ndocument.querySelectorAll('[data-swiper=\"true\"]:not(.swiper-initialized)').forEach(function(container, index) {\n  \n  const dataset = container.dataset\n  \n  const options = {\n    loop: dataset.infiniteLoop === 'true',\n    speed: parseFloat(dataset.sliderSpeed) || 1000,\n    parallax: dataset.parallax === 'true',\n    spaceBetween: parseFloat(dataset.spaceBetweenSlides) || 0,\n    slidesPerView: dataset.slidesPerView === 'auto' ? 'auto' : parseFloat(dataset.slidesPerView) || 1,\n    effect: dataset.effect || 'slide',\n    fadeEffect: { crossFade: dataset.crossfadeEffect === 'true' },\n    autoplay: dataset.autoplay === 'true' ? {\n      delay: parseFloat(dataset.autoplayDelay) || 5000,\n      disableOnInteraction: dataset.autoplayInteractDisable === 'true',\n    } : false,\n    pagination: dataset.pagination === 'true' ? {\n      el:  container.querySelector(dataset.paginationEl || '.swiper-pagination'),\n      clickable: dataset.paginationClickable === 'true',\n    } : false,\n    navigation: dataset.nav === 'true' ? {\n      nextEl: container.querySelector(dataset.navNextEl || '.swiper-button-next'),\n      prevEl: container.querySelector(dataset.navPrevEl || '.swiper-button-prev'),\n    } : false,\n    freeMode: dataset.freeMode === 'true',\n    centeredSlides: dataset.centeredSlides === 'true', // Apply general setting\n  };\n  \n  new Swiper(container, options);\n});\n</script>"}
clientOnly={true}
executeScriptOnCanvas={false}
className={`w-html-embed`} />
</Fragment_1>
</Slot>
</Box>
}
</div>
}
</section>
{(!!REQHomePage?.data?.data?.customerLogos?.customersLogos?.length) &&
<section
id={REQHomePage?.data?.data?.customerLogos?.idAttr}
className={`w-element c1sb8ohy c9s2vs7 c1f5y87x c1y6e6gy`}>
<h3
className={`w-element c1vu70pc co7nfib chae98v cqp1iu8 c1dxgzic cavlpe c1bjxlr9 ch2shl c1dhh8cz c1u6lavf`}>
{REQHomePage?.data?.data?.customerLogos?.sectionTitle}
</h3>
<Box
className={`w-box c1przhxw cyksmbj c1oji2iw c7pv373 c1ejoj25 cy0z055 c1rc0m8f czzvbuw`}>
{Object.entries(
  // @ts-ignore
  REQHomePage?.data?.data?.customerLogos?.customersLogos ?? {}
).map(([_key, collectionItem_3]: any) => {
  const index_3 = Array.isArray(REQHomePage?.data?.data?.customerLogos?.customersLogos) ? Number(_key) : _key;
  return (
<Fragment key={index_3}>
<div
className={`w-element c2ace6m cjaeftc c15ykucn cb65ij0 cec8bqd c3txa2i`}>
<Image
optimize={false}
alt={collectionItem_3?.logo?.alternativeText}
loading={"eager"}
src={URLcmsMediaLocal+collectionItem_3?.logo?.url}
className={`w-image c11w9ocq cq9s6sa c1lpmvvg c1q5766j cyiufop`} />
</div>
</Fragment>
)
})
}
</Box>
</section>
}
{(!!REQBenfitsDevmat?.data?.data?.length) &&
<section
id={REQHomePage?.data?.data?.benefitsSection?.idAttr}
className={`w-element csdhugg ccgn8hl c1g0sytn c1f5y87x c1y6e6gy c1g91ykm`}>
<h2
className={`w-element cavlpe c53v5zz c1735zj0 cseqxw9 c1g7thye`}>
{REQHomePage?.data?.data?.benefitsSection?.title}
</h2>
<h3
className={`w-element cavlpe c1bjxlr9 c1nr3lww cpf8n67 crl2cyx c1xz0hfv c1nn1c1j c1d80dtg cseqxw9 c1g7thye`}>
{  REQHomePage?.data?.data?.benefitsSection?.subtitle}
</h3>
<div
className={`w-element cyksmbj c1oji2iw c7pv373 c1rc0m8f c1ejoj25 cy0z055 cax2fkw c1xz0hfv c1nn1c1j`}>
{Object.entries(
  // @ts-ignore
  REQBenfitsDevmat?.data?.data ?? {}
).map(([_key, collectionItem_4]: any) => {
  const collectionItemKey_2 = Array.isArray(REQBenfitsDevmat?.data?.data) ? Number(_key) : _key;
  return (
<Fragment key={collectionItemKey_2}>
<div
className={`w-element cyksmbj c1oji2iw ceh8ohp c1i7snbb cxd2r2c ckj6qkx cwscl0b c2ace6m cjaeftc c15ykucn cb65ij0 c11w6vg0 c11pah1h c1albq49 cug67g7 c13y6mwa clehr3x c1shz9cy`}>
<div
className={`w-element c19dwi73 c1tl8dvd cu3uc3t cyksmbj c1oji2iw c7pv373 c1shz9cy c139wi4d`}>
{(!(collectionItem_4?.image)) &&
<Image
src={URLcmsMediaLocal+collectionItem_4?.icon?.icon?.url}
optimize={false}
width={35}
height={35}
alt={collectionItem_4?.icon?.icon?.alternativeText}
className={`w-image cu3uc3t`} />
}
{(!!(collectionItem_4?.image)) &&
<Image
src={URLcmsMediaLocal+collectionItem_4?.image?.url}
width={150}
height={150}
optimize={false}
alt={collectionItem_4?.image?.alternativeText}
className={`w-image c1pwlyx4 ctvij5o cyiufop`} />
}
</div>
<h4
className={`w-element c53v5zz c19jcr0r cp01muw c1przhxw`}>
{collectionItem_4?.title}
</h4>
<p
className={`w-element ccn41lv c1bjxlr9 c1yral3q chgofs2 cfymgcs c1va13rh`}>
{collectionItem_4?.subtitle}
</p>
</div>
</Fragment>
)
})
}
</div>
</section>
}
{(!!REQGetStartedSteps?.data?.data?.length) &&
<section
id={REQHomePage?.data?.data?.gettingStartedSection?.idAttr}
className={`w-element c1w5qiyf c7pv373 ccgn8hl c13imvs7 c1f5y87x c1y6e6gy`}>
<h2
className={`w-element cavlpe c53v5zz c1735zj0 cseqxw9 c1g7thye`}>
{REQHomePage?.data?.data?.gettingStartedSection?.title}
</h2>
<h3
className={`w-element cavlpe c1bjxlr9 c1nr3lww cpf8n67 crl2cyx c1xz0hfv c1nn1c1j c1d80dtg cseqxw9 c1g7thye`}>
{  REQHomePage?.data?.data?.gettingStartedSection?.subtitle}
</h3>
<div
className={`w-element cyksmbj cgocsqs c7pv373 cfg2sgc c1qmi4iq c1rc0m8f csjbh93 c2zh38f c1xz0hfv c1nn1c1j cax2fkw`}>
{Object.entries(
  // @ts-ignore
  REQGetStartedSteps?.data?.data ?? {}
).map(([_key, collectionItem_5]: any) => {
  const collectionItemKey_3 = Array.isArray(REQGetStartedSteps?.data?.data) ? Number(_key) : _key;
  return (
<Fragment key={collectionItemKey_3}>
<div
className={`w-element chxr0yu cavlpe clehr3x`}>
<div
className={`w-element`}>
<span
className={`w-element c1edpqcq c1ym4vzx cqgrdaa c12w5tc0 c1gdf85e ch2shl c1ox04z8 c57zjvh c143tev2 cu2xsck cavlpe c1w5qiyf cv7jxuo`}>
{collectionItem_5?.index}
</span>
</div>
<h4
className={`w-element c53v5zz c19jcr0r cp01muw c1przhxw`}>
{collectionItem_5?.title}
</h4>
<p
className={`w-element ccn41lv c1bjxlr9 c1yral3q chgofs2 cfymgcs cavlpe`}>
{collectionItem_5?.subtitle}
</p>
</div>
</Fragment>
)
})
}
</div>
</section>
}
{(!!REQSolutions?.data?.data?.length) &&
<section
id={REQHomePage?.data?.data?.solutions?.idAttr}
className={`w-element ccgn8hl c13imvs7 csdhugg c1f5y87x c1y6e6gy`}>
<h2
className={`w-element cavlpe c53v5zz c1735zj0 cseqxw9 c1g7thye`}>
{REQHomePage?.data?.data?.solutions?.title}
</h2>
<h3
className={`w-element cavlpe c1bjxlr9 c1nr3lww cpf8n67 crl2cyx c1xz0hfv c1nn1c1j c1d80dtg cseqxw9 c1g7thye`}>
{REQHomePage?.data?.data?.solutions?.subtitle}
</h3>
<div
className={`w-element cyksmbj c1rc0m8f cgocsqs c7pv373 c132tfj6 cravwn1 cax2fkw c1xz0hfv c1nn1c1j`}>
{Object.entries(
  // @ts-ignore
  REQSolutions?.data?.data ?? {}
).map(([_key, collectionItem_6]: any) => {
  const collectionItemKey_4 = Array.isArray(REQSolutions?.data?.data) ? Number(_key) : _key;
  return (
<Fragment key={collectionItemKey_4}>
<div
className={`w-element chxr0yu c4tl1wi c2ace6m cjaeftc c15ykucn cb65ij0 cmx5vkr cwscl0b c1kelpe5 ct2ibbp c14pkkrt c1ldhh9k czzvbuw clehr3x c1shz9cy`}>
<h4
className={`w-element c53v5zz c19jcr0r cp01muw c1przhxw cbbmne5 cu3uc3t cyksmbj c1oji2iw c1029aa7 c1tjvjms`}>
{(!!collectionItem_6?.icon) &&
<Image
src={URLcmsMediaLocal+collectionItem_6?.icon?.icon?.url}
width={20}
height={20}
optimize={false}
className={`w-image`} />
}
<span
className={`w-element c2a889p`}>
{collectionItem_6?.title}
</span>
</h4>
<p
className={`w-element ccn41lv c1bjxlr9 c1yral3q chgofs2 cfymgcs cu3uc3t`}>
{collectionItem_6?.subtitle}
</p>
</div>
</Fragment>
)
})
}
</div>
</section>
}
{(!!REQClientReviews?.data?.data?.length) &&
<section
id={REQHomePage?.data?.data?.clientReviews?.idAttr}
className={`w-element ccgn8hl c13imvs7 c1f5y87x c1y6e6gy`}>
<h2
className={`w-element cavlpe c53v5zz c1735zj0 cseqxw9 c1g7thye`}>
{REQHomePage?.data?.data?.clientReviews?.title}
</h2>
<h3
className={`w-element cavlpe c1bjxlr9 c1nr3lww cpf8n67 crl2cyx c1xz0hfv c1nn1c1j c1d80dtg cseqxw9 c1g7thye`}>
{REQHomePage?.data?.data?.clientReviews?.subtitle}
</h3>
<div
className={`w-element cyksmbj cgocsqs c7pv373 c1rc0m8f cax2fkw c1xz0hfv c1nn1c1j c132tfj6 cravwn1`}>
{Object.entries(
  // @ts-ignore
  REQClientReviews?.data?.data ?? {}
).map(([_key, collectionItem_7]: any) => {
  const collectionItemKey_5 = Array.isArray(REQClientReviews?.data?.data) ? Number(_key) : _key;
  return (
<Fragment key={collectionItemKey_5}>
<div
className={`w-element cxd2r2c c6xo9yz csjbh93 c2zh38f ci9iosc ckscsr3 csdhugg c2ace6m cjaeftc c15ykucn cb65ij0 cwscl0b clehr3x c1shz9cy`}>
<div
className={`w-element cyksmbj cn2cawe ceqpkba c1r678ej`}>
{(!!collectionItem_7?.icon) &&
<Image
optimize={false}
width={40}
height={40}
src={URLcmsMediaLocal+collectionItem_7?.icon?.icon?.url}
alt={collectionItem_7?.icon?.name}
className={`w-image c1ym4vzx cqgrdaa c12w5tc0 c1gdf85e c18vsw38 cmx5vkr c57zjvh c143tev2 c1o9f9gj`} />
}
<div
className={`w-element c1przhxw cyksmbj c1i7snbb c1029aa7 c1tjvjms`}>
<span
className={`w-element c53v5zz cjocp00 c1kgmnno c1przhxw cbbmne5 cu3uc3t cyksmbj c1oji2iw c1029aa7 c1tjvjms ch2shl c71ptit`}>
{collectionItem_7?.name}
</span>
<span
className={`w-element c1bjxlr9 c1yral3q cib9e3x`}>
{collectionItem_7?.title}
</span>
</div>
</div>
<p
className={`w-element cseqxw9 c1g7thye cu3uc3t ccn41lv c16wa6q4`}>
{collectionItem_7?.message}
</p>
</div>
</Fragment>
)
})
}
</div>
</section>
}
{(!!REQFAQs?.data?.data?.length) &&
<Box
tag={"section"}
id={REQHomePage?.data?.data?.faqs?.idAttr}
className={`w-box ccgn8hl c1tmfs83 c1f5y87x c1y6e6gy`}>
<h2
className={`w-element cavlpe c53v5zz c1735zj0 cseqxw9 c1g7thye`}>
{REQHomePage?.data?.data?.faqs?.title}
</h2>
<h3
className={`w-element cavlpe c1bjxlr9 c1nr3lww cpf8n67 crl2cyx c1xz0hfv c1nn1c1j c1d80dtg cseqxw9 c1g7thye`}>
{REQHomePage?.data?.data?.faqs?.subtitle}
</h3>
<Box
className={`w-box c1nn1c1j c1xz0hfv c1przhxw cxg5738 cyksmbj c1i7snbb c1oji2iw c7pv373 cqs24yx crq0lw5 c12c3gfp c19d7s0z`}>
<Accordion
collapsible={true}
defaultValue={"0"}
className={`w-accordion cyksmbj c1i7snbb cpoffl7 cqf8bry c1przhxw c1dqo4lx`}>
{Object.entries(
  // @ts-ignore
  REQFAQs?.data?.data ?? {}
).map(([_key, collectionItem_8]: any) => {
  const collectionItemKey_6 = Array.isArray(REQFAQs?.data?.data) ? Number(_key) : _key;
  return (
<Fragment key={collectionItemKey_6}>
<AccordionItem
data-ws-index="0"
value={collectionItem_8?.id}
className={`w-item csdhugg c2ace6m cjaeftc c15ykucn cb65ij0 c17lpirz`}>
<AccordionHeader
className={`w-item-header`}>
<AccordionTrigger
className={`w-item-trigger c19ayrcm cm1hduf criptam c1wt1jtj cyksmbj cz7blj3 c1q7lfpp c1oji2iw c15rivg7 c2ueswb c12lbw13 cu3uc3t c19wjuga cnkf3ke cjtheg6 clmafat c1rkdu33 c2i0qoz c1przhxw c1sptf7h c13vx7e3 cqdt8qy c1r327ph c1rz3epl c1vfrllj c12vkfrs c1659ldh c1gaf8ah c13tjyny ca0pwlj`}>
<Text
className={`w-text c71ptit ca5o0vn ca158u0 ck8bb3l c53v5zz`}>
{collectionItem_8?.question}
</Text>
<Box
className={`w-box c1kb9p4l co4vxu0 c1wpuplm c1lo2dsu cvqk5mf c1sh59al c1fsquqg c1mucujo c1o70tqg`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#14457b\"><path d=\"M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z\"/></svg>"}
className={`w-html-embed c1rupdtc`} />
</Box>
</AccordionTrigger>
</AccordionHeader>
<AccordionContent
data-ani={"expand"}
className={`w-item-content`}>
<Box
className={`w-box c72otkl cseqxw9 c1g7thye`}>
<MarkdownEmbed
code={collectionItem_8?.answer}
className={`w-markdown-embed ccn41lv c1bjxlr9 clh9rxp`}>
</MarkdownEmbed>
</Box>
</AccordionContent>
</AccordionItem>
</Fragment>
)
})
}
</Accordion>
</Box>
</Box>
}
<section
id={REQHomePage?.data?.data?.contactForm?.idAttr}
className={`w-element ccgn8hl c13imvs7 c1y6e6gy c1f5y87x cyidosu`}>
<h2
className={`w-element cavlpe c1ox04z8 c1735zj0 cseqxw9 c1g7thye`}>
{REQHomePage?.data?.data?.contactForm?.title}
</h2>
<h3
className={`w-element cavlpe c1ox04z8 c1nr3lww cpf8n67 crl2cyx c1xz0hfv c1nn1c1j c1d80dtg cseqxw9 c1g7thye`}>
{REQHomePage?.data?.data?.contactForm?.subtitle}
</h3>
<div
className={`w-element`}>
<Form
state={formState}
onStateChange={(state: any) => {
formState = state
set$formState(formState)
}}
action={"action"}
className={`w-webhook-form c1fq6v54 c1xz0hfv c1nn1c1j`}>
{(formState === 'initial' || formState === 'error') &&
<div
className={`w-element cyksmbj c1i7snbb c18htm2o c41c50e c1xz0hfv c1nn1c1j`}>
<div
className={`w-element cyksmbj c1i7snbb c1e12a07 chn9tnv`}>
<Label
className={`w-label cc3itzg c1n9d4u8 ch2shl`}>
<span
className={`w-element c1ox04z8 c1dhh8cz c1qwscpl cu2xsck ch2shl`}>
{REQHomePage?.data?.data?.contactForm?.formInputNames?.subjectInputName}
</span>
<Select
name={REQHomePage?.data?.data?.contactForm?.formInputNames?.subjectInputName}
required={true}
value={REQHomePage?.data?.data?.contactForm?.formSubjects?.[0]?.formSubject}
className={`w-element c1k5mt0p c1w9irg3 c1przhxw c1oji2iw c1izcx45 c1scatng c12dglsd c18cn36h c1s0vdhp c1tu7rdi c1o1lwe9 c1kh7ybw c11ceujt c16v3bxy cc3itzg cu15652 cpf8n67 c1s43d56 c1xhvr2q c16vucp1 crafl4a czh82uq cbq1r21`}>
{Object.entries(
  // @ts-ignore
  REQHomePage?.data?.data?.contactForm?.formSubjects ?? {}
).map(([_key, collectionItem_10]: any) => {
  const collectionItemKey_8 = Array.isArray(REQHomePage?.data?.data?.contactForm?.formSubjects) ? Number(_key) : _key;
  return (
<Fragment key={collectionItemKey_8}>
<option
label={collectionItem_10?.formSubject}
value={collectionItem_10?.formSubject}
className={`w-element`} />
</Fragment>
)
})
}
</Select>
</Label>
</div>
<div
className={`w-element cyksmbj cj4fr1t c41c50e c1rc0m8f`}>
<div
className={`w-element cyksmbj c1i7snbb c1e12a07 chn9tnv c19ayrcm cleis16 cmxafh8`}>
<Label
className={`w-label cc3itzg c1n9d4u8 cyjqqjx`}>
<span
className={`w-element c1ox04z8 c1dhh8cz c1qwscpl cu2xsck ch2shl`}>
{REQHomePage?.data?.data?.contactForm?.formInputNames?.nameInputName}
</span>
<Input
type={"text"}
required={true}
name={REQHomePage?.data?.data?.contactForm?.formInputNames?.nameInputName}
placeholder={REQHomePage?.data?.data?.contactForm?.formInputNames?.nameInputName}
className={`w-element c1k5mt0p c1w9irg3 c1przhxw c1oji2iw c1izcx45 c1scatng c12dglsd c18cn36h c1s0vdhp c1tu7rdi c1o1lwe9 c1kh7ybw c11ceujt c16v3bxy cc3itzg cu15652 cpf8n67 c1s43d56 c1xhvr2q ckhmb2v c16vucp1 crafl4a czh82uq cbq1r21`} />
</Label>
</div>
<div
className={`w-element cyksmbj c1i7snbb c1e12a07 chn9tnv c19ayrcm cleis16 cmxafh8`}>
<Label
className={`w-label cc3itzg c1n9d4u8 cyjqqjx`}>
<span
className={`w-element c1ox04z8 c1dhh8cz c1qwscpl cu2xsck ch2shl`}>
{REQHomePage?.data?.data?.contactForm?.formInputNames?.emailInputName}
</span>
<Input
type={"email"}
required={true}
name={REQHomePage?.data?.data?.contactForm?.formInputNames?.emailInputName}
placeholder={REQHomePage?.data?.data?.contactForm?.formInputNames?.emailInputName}
className={`w-element c1k5mt0p c1w9irg3 c1przhxw c1oji2iw c1izcx45 c1scatng c12dglsd c18cn36h c1s0vdhp c1tu7rdi c1o1lwe9 c1kh7ybw c11ceujt c16v3bxy cc3itzg cu15652 cpf8n67 c1s43d56 c1xhvr2q ckhmb2v c16vucp1 crafl4a czh82uq cbq1r21`} />
</Label>
</div>
</div>
<div
className={`w-element cyksmbj c1i7snbb c1e12a07 chn9tnv`}>
<Label
className={`w-label cc3itzg c1n9d4u8 cyjqqjx`}>
<span
className={`w-element c1ox04z8 c1dhh8cz c1qwscpl cu2xsck ch2shl`}>
{REQHomePage?.data?.data?.contactForm?.formInputNames?.messageInputName}
</span>
<Textarea
required={true}
name={REQHomePage?.data?.data?.contactForm?.formInputNames?.messageInputName}
className={`w-element c1k5mt0p c10q1xg1 c1przhxw c1oji2iw c1izcx45 c1scatng c12dglsd c18cn36h c1s0vdhp c1tu7rdi c1o1lwe9 c1kh7ybw c11ceujt c16v3bxy cc3itzg cu15652 cpf8n67 c1s43d56 c1xhvr2q c16vucp1 crafl4a czh82uq cbq1r21`} />
</Label>
</div>
<button
type={"submit"}
className={`w-element c1xz0hfv c1nn1c1j c1ii509t c143tev2 c2ace6m cjaeftc c15ykucn cb65ij0 ccfiqmq c1dhh8cz c53v5zz ch2shl cjtheg6 clmafat c1rkdu33 c2i0qoz c1eqwf0y cevelsr c1lc8yfv c1mucujo c1o70tqg cmx5vkr c11r2gzv c152jaq9 c2tdqda`}>
{REQHomePage?.data?.data?.contactForm?.formSubmitBtnText}
</button>
</div>
}
{(formState === 'success') &&
<div
className={`w-element cavlpe c1ox04z8 ccn41lv c1s55wh8 c7cd9ps c1xz0hfv c1nn1c1j c17l107q c1axzkds cpofr2j c1lflnfx c2ace6m cjaeftc c15ykucn cb65ij0 c1l06n22 c1u6lavf c1q2liwv`}>
{REQHomePage?.data?.data?.contactForm?.successMessage}
</div>
}
{(formState === 'error') &&
<div
className={`w-element cavlpe c1thowfs c17l107q c1axzkds cpofr2j c1lflnfx c2ace6m cjaeftc c15ykucn cb65ij0 c40rd93 c163bfw4 c7gmv7x cszm7qs c5ccpqx c1q2liwv`}>
{REQHomePage?.data?.data?.contactForm?.errorMessage}
</div>
}
</Form>
</div>
</section>
<footer
className={`w-element c1j6km2m ceohp8a c3vcdka c1ht3eul`}>
<div
className={`w-element cvq2wwp cyksmbj c1i7snbb c1029aa7 c1tjvjms cih7fsz c1xz0hfv c1nn1c1j c2ace6m cjaeftc c15ykucn cb65ij0 c17l107q c1axzkds cpofr2j c1lflnfx c1ezmlcj c9hm1t6 c440rna cscmz44 c1o9f9gj`}>
<div
className={`w-element cyksmbj c1q7lfpp c1wdeocc cgqpu4r cziueud c1wh3e3g c1rc0m8f c22bnnu cy0z055`}>
<div
className={`w-element cyksmbj c1i7snbb c1s7cfds cgocsqs ceh8ohp cfspsgy c1jlm1rw`}>
<Link_1
title={REQsitestate?.data?.data?.websiteURL}
href={REQsitestate?.data?.data?.websiteURL}
target={"_self"}
className={`w-element cu2xsck cqjwob8`}>
<div
className={`w-element c1anbojs c1eqko4a chxya58 c1wdeocc c4cayoo c1ox04z8 cj79p55 c1falt5c cfxgm5o c1dipgxw c1c9qrtl`}>
{"Devmat Solutions PC"}
</div>
</Link_1>
<p
className={`w-element cp01muw c1ihn9l4 c189u35v c1yral3q c17j7sop`}>
{REQfooter?.data?.data?.footerParagraph}
</p>
<div
className={`w-element cyksmbj ceqpkba c1s7cfds c1mvrzbm c17p4du2`}>
{Object.entries(
  // @ts-ignore
  REQSocial?.data?.data ?? {}
).map(([_key, collectionItem_11]: any) => {
  const collectionItemKey_9 = Array.isArray(REQSocial?.data?.data) ? Number(_key) : _key;
  return (
<Fragment key={collectionItemKey_9}>
<Link_1
href={collectionItem_11?.link}
target={"_blank"}
title={collectionItem_11?.link}
className={`w-element cu2xsck`}>
<Image
src={URLcmsMediaLocal+collectionItem_11?.icon?.icon?.url
}
optimize={false}
width={26}
height={26}
alt={collectionItem_11?.name}
className={`w-image c5ccpqx`} />
</Link_1>
</Fragment>
)
})
}
</div>
</div>
<div
className={`w-element cyksmbj c1rc0m8f c1qmi4iq c1pzb3bk ckfzd4e`}>
{(!!REQNavigation?.data?.data?.footerNavbar?.navlink?.length) &&
<div
className={`w-element cm4wacd chxya58 cn3l2c4 crw0x0i`}>
<h4
className={`w-element c1kgmnno c128qlnr c16wa6q4 ch2shl c19jcr0r`}>
{REQNavigation?.data?.data?.footerNavbar?.title}
</h4>
<div
className={`w-element cyksmbj c1i7snbb c1r678ej ceqpkba cqjwob8`}>
{Object.entries(
  // @ts-ignore
  REQNavigation?.data?.data?.footerNavbar?.navlink ?? {}
).map(([_key, collectionItem_12]: any) => {
  const collectionItemKey_10 = Array.isArray(REQNavigation?.data?.data?.footerNavbar?.navlink) ? Number(_key) : _key;
  return (
<Fragment key={collectionItemKey_10}>
<div
className={`w-element c6xnyar c1ox04z8`}>
<Link_1
href={collectionItem_12?.href}
target={collectionItem_12?.target}
title={collectionItem_12?.href}
className={`w-element cu2xsck c1ox04z8 c6xnyar cqjwob8`}>
{collectionItem_12?.name}
</Link_1>
</div>
</Fragment>
)
})
}
</div>
</div>
}
{(!!REQContactInfo?.data?.data?.block) &&
<div
className={`w-element cm4wacd chxya58 cn3l2c4 crw0x0i`}>
<MarkdownEmbed
code={REQContactInfo?.data?.data?.block}
className={`w-markdown-embed c189u35v c16wa6q4 c1j26kzh cymfyx4 c11xdbs4 c1u4vt9x c1m580rh c17yn698 ckca6uk c1mbvols c1y8jsaf cyveut7`}>
</MarkdownEmbed>
</div>
}
</div>
</div>
<hr
className={`w-element c6kddcu c1igzqza c2ace6m cjaeftc c15ykucn cb65ij0 c1ihn9l4 cp01muw cajlrfu`} />
<div
className={`w-element cjtheg6 clmafat c1rkdu33 c2i0qoz cyksmbj c1q7lfpp c1rc0m8f c4cayoo ckscsr3 ci9iosc cfg2sgc c1r678ej clh9rxp cfxnsae c1bozzle c1jn2p7j c1jfats1`}>
<div
className={`w-element c6kddcu c86bv7 c61c8kn ceohp8a`}>
<MarkdownEmbed
code={REQfooter?.data?.data?.siteSign}
className={`w-markdown-embed civ40sl c17yn698 c1k6ljxw c1rj2vk0 covdlgc`}>
</MarkdownEmbed>
</div>
<div
className={`w-element c6kddcu cqjwob8 c1b6ou4s c14dg725 c1db9cug`}>
<MarkdownEmbed
code={REQfooter?.data?.data?.developerSign}
className={`w-markdown-embed c1k5mt0p ceohp8a c6kddcu cqjwob8 c3l0smv c128652x covdlgc civ40sl c17yn698 c1k6ljxw c1rj2vk0`}>
</MarkdownEmbed>
</div>
</div>
</div>
</footer>
</Body>
}


      export { Page }
    