// app/sitemap.ts

export default function sitemap() {
    const mainURL = "https://domapphub.com/";
    return [
      {
        url: `${mainURL}`,
        lastModified: new Date(),
        priority: 1,
      },
  
      {
        url: `${mainURL}/bondifycrm`,
        lastModified: new Date(),
      },
      {
        url: `${mainURL}/byld`,
        lastModified: new Date(),
      },
      {
        url: `${mainURL}/chatplus`,
        lastModified: new Date(),
      },
  
      {
        url: `${mainURL}/cladcut`,
        lastModified: new Date(),
      },
      {
        url: `${mainURL}/grasshopper`,
        lastModified: new Date(),
      },
      {
        url: `${mainURL}/rdapp`,
        lastModified: new Date(),
      },
      {
        url: `${mainURL}/chatplus`,
        lastModified: new Date(),
      },
      {
        url: `${mainURL}/windmaster`,
        lastModified: new Date(),
      },
      {
        url: `${mainURL}/customization`,
        lastModified: new Date(),
      },

    ];
}

export async function generateStaticParams() {
    return [
        { __metadata_id__: [] }
    ];
}