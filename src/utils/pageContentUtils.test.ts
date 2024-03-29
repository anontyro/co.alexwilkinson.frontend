import ContentType from "@/api/types/ContentType";
import { findDataByType, findDataString } from "./pageContentUtils";
const mockContent: ContentType[] = [
  {
    type: "TextBlock",
    content: [
      {
        type: "Title",
        content: "My Portfolio",
      },
      {
        type: "Body",
        content:
          "This is a showcase of some of my projects I have worked on over the course of my career both professionally and personally. Check out my Github for more projects and code samples.",
      },
    ],
  },
  {
    type: "StandardList",
    content: [
      {
        type: "Item",
        meta: {
          url: "https://impala.travel",
          tags: [
            "Professional",
            "React",
            "Node",
            "AWS",
            "Docker",
            "Kubernetes",
            "TypeScript",
            "Terraform",
            "NextJS",
          ],
        },
        content: [
          {
            type: "Title",
            content: "Impala No-Code",
          },
          {
            type: "Body",
            content:
              "A no-code platform for building and deploying websites and web apps. I worked on the frontend and backend of the platform, as well as the deployment infrastructure.",
          },
          {
            type: "GeoLocation",
            content: "United Kingdom",
          },
          {
            type: "Id",
            content: "b8184265-9be1-4e74-bf66-af3f3120d7c6",
          },
          {
            type: "Images",
            content: [
              {
                type: "Image",
                content:
                  "https://github.com/anontyro/co.alexwilkinson.frontend/blob/content/main/public/impala/no-code/screen-01.png?raw=true",
              },
              {
                type: "Image",
                content:
                  "https://github.com/anontyro/co.alexwilkinson.frontend/blob/content/main/public/impala/no-code/screen-02.png?raw=true",
              },
              {
                type: "Image",
                content:
                  "https://github.com/anontyro/co.alexwilkinson.frontend/blob/content/main/public/impala/no-code/screen-03.png?raw=true",
              },
            ],
          },
        ],
      },
      {
        type: "Item",
        meta: {
          url: "https://chinsay.com",
          tags: [
            "Professional",
            "VueJS",
            "Node",
            "Azure",
            "Docker",
            "TypeScript",
            "C#",
            ".Net Core",
          ],
        },
        content: [
          {
            type: "Title",
            content: "Chinsay ICP",
          },
          {
            type: "Body",
            content:
              "Freight contract digitisation platform. I worked full stack on a Microsoft stack with the responsability to modernise the platform and run the experience team.",
          },
          {
            type: "GeoLocation",
            content: "Singapore",
          },
          {
            type: "Id",
            content: "ca91d80e-d821-4dbc-b7df-d5975db1856b",
          },
          {
            type: "Images",
            content: [],
          },
        ],
      },
      {
        type: "Item",
        meta: {
          url: null,
          tags: ["Professional", "React", "Node", "AWS", "Docker"],
        },
        content: [
          {
            type: "Title",
            content: "Hooq",
          },
          {
            type: "Body",
            content:
              "An Over The Top video streaming service based in Singpore. It serviced SEA and India, I worked mostly on the frontend for the webapp.",
          },
          {
            type: "GeoLocation",
            content: "Singapore",
          },
          {
            type: "Id",
            content: "e543c612-c9e5-4528-a48d-ac1241ecfb7b",
          },
          {
            type: "Images",
            content: [],
          },
        ],
      },
      {
        type: "Item",
        meta: {
          url: "https://alexwilkinson.co",
          tags: [
            "Personal",
            "React",
            "Node",
            "GraphQL",
            "AWS",
            "Docker",
            "NextJS",
          ],
        },
        content: [
          {
            type: "Title",
            content: "Personal Website",
          },
          {
            type: "Body",
            content:
              "My personal website that I have updated several times of the years, with my latest version changing the style entirely in a way to hopefully modernise the site and use more updated technologies.",
          },
          {
            type: "Id",
            content: "dcb68769-4dcd-4aef-a503-1b78cde420f0",
          },
          {
            type: "Images",
            content: [],
          },
        ],
      },
    ],
  },
  {
    type: "VideoList",
    content: [
      {
        type: "Item",
        meta: {
          url: "https://www.youtube.com/watch?v=nYbIB7uR0ig",
          tags: ["Personal", "GraphQL", "TypeScript", "TalkJS", "Singapore"],
        },
        content: [
          {
            type: "Title",
            content: "Fullstack GraphQL",
          },
          {
            type: "Date",
            content: "2019-05-15",
          },
          {
            type: "Id",
            content: "99257775-72f2-4bd6-bcc4-bde2b1b5b076",
          },
          {
            type: "GeoLocation",
            content: "Singapore",
          },
          {
            type: "EventName",
            content: "talk.js",
          },
        ],
      },
      {
        type: "Item",
        meta: {
          url: "https://www.youtube.com/watch?v=SGDbI2HC2s8",
          tags: ["Personal", "Svelte", "TypeScript", "TalkJS", "Singapore"],
        },
        content: [
          {
            type: "Title",
            content: "Svelte: Streamlined, lightweight web apps",
          },
          {
            type: "Date",
            content: "2019-09-11",
          },
          {
            type: "Id",
            content: "218a426b-66d3-457b-a6a2-61556042582f",
          },
          {
            type: "GeoLocation",
            content: "Singapore",
          },
          {
            type: "EventName",
            content: "talk.js",
          },
        ],
      },
    ],
  },
];

describe("findDataParentType", () => {
  it("should return the first textblock type", () => {
    const textBlock = findDataByType(mockContent, "TextBlock");
    expect(textBlock).toMatchObject({
      type: "TextBlock",
      content: [
        {
          type: "Title",
          content: "My Portfolio",
        },
        {
          type: "Body",
          content:
            "This is a showcase of some of my projects I have worked on over the course of my career both professionally and personally. Check out my Github for more projects and code samples.",
        },
      ],
    });
  });

  it("should get the title form the textBlock item", () => {
    const textBlock = findDataByType<ContentType>(mockContent, "TextBlock");
    const title = findDataString(textBlock?.content, "Title");
    expect(title).toEqual("My Portfolio");
  });
});
