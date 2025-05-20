import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import Volunteer from "@/app/(mainsite)/components/volunteerpage/Volunteer/Volunteer"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `Volunteer | ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
	  description: `Volunteer | ${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
openGraph: {
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
type: "website",
images: [
{
url: `${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`,
width: 1280,
height: 720,
}
]
},
twitter: {
card: 'summary_large_image',
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
 images: [`${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`]
}
}

export default function VolunteerPage(){
	 return(
	 	 <>
			<PageTitle noButton title="Volunteer" subtitle="Join Us in Making a Difference" />
			<Volunteer />
	 	 </>
	 )
}