import { WikipediaResource } from "../types";

export const wikipediaResources = [
  {
    id: "0",
    name: "Starknet Website",
    description: "Official Website of Starknet.",
    status: "Up to date",
    url: "https://www.starknet.io/en",
    category: "official-website",
  },
  {
    id: "1",
    name: "Starknet Documentation",
    description: "Official Documentation for Starknet.",
    status: "Up to date",
    url: "https://docs.starknet.io/",
    category: "documentation",
  },
  {
    id: "2",
    name: "The Starknet Book",
    description:
      "The Starknet Book is a step-by-step guide aimed at teaching you the essentials of Starknet development. This book works hand-in-hand with the Cairo Book.",
    status: "Up to date",
    url: "https://book.starknet.io/",
    category: "tutorials",
  },
  {
    id: "3",
    name: "Starklings",
    description:
      "Interactive tutorial to get you up and running with Cairo v1 and Starknet.",
    status: "Up to date",
    url: "https://github.com/shramee/starklings-cairo1",
    category: "tutorials",
  },
  {
    id: "4",
    name: "Awesome Starknet",
    description:
      "A curated list of awesome StarkNet resources, libraries, tools and more",
    status: "Up to date",
    url: "https://github.com/keep-starknet-strange/awesome-starknet",
    category: "documentation",
  },
  {
    id: "5",
    name: "Node Guardians",
    description: "Cairo 1.0 interactive tutorials.",
    status: "Up to date",
    url: "https://nodeguardians.io/dev-hub?s=devhub-campaigns&sc=starting-cairo",
    category: "tutorials",
  },
  {
    id: "6",
    name: "Starknet messaging tutorial",
    description: "Detailed tutorial to test messaging with Anvil and Katana.",
    status: "Out of date",
    url: "https://github.com/starknet-edu/starknet-erc721",
    category: "tutorials",
  },
  {
    id: "7",
    name: "Starknet Blog Posts",
    description: "Official blog posts related to Starknet.",
    status: "Up to date",
    url: "https://www.starknet.io/en/content",
    category: "blogs",
  },
  {
    id: "8",
    name: "Developers Blog",
    description: "Official Developers Blog for Starknet.",
    status: "Up to date",
    url: "https://www.starknet.io/en/content/category/developers",
    category: "blogs",
  },
  {
    id: "9",
    name: "Starknet research hub",
    description:
      "The place to learn more about the Starknet ecosystem and stay-up-to-date with the latest news.",
    status: "Up to date",
    url: "https://starknet-research.beehiiv.com/",
    category: "official-website",
  },
  {
    id: "10",
    name: "Starknet Hardhat plugin",
    description:
      "A plugin for integrating Starknet tools into Hardhat projects.",
    status: "Up to date",
    url: "https://github.com/0xSpaceShard/starknet-hardhat-plugin",
    category: "plugins",
  },
  {
    id: "11",
    name: "STARK Math: The Journey Begins",
    description:
      "Starkware's series of blog posts explaining the theory behind STARKs.",
    status: "Up to date",
    url: "https://medium.com/starkware/stark-math-the-journey-begins-51bd2b063c71",
    category: "blogs",
  },
  {
    id: "12",
    name: "Cryptography and maths",
    description: "Educational resources on cryptography and maths.",
    status: "Up to date",
    url: "https://medium.com/starkware/tagged/math",
    category: "tutorials",
  },
  {
    id: "13",
    name: "Starkware verifier (StarkEx)",
    description: "Official Starkware verifier.",
    status: "Up to date",
    url: "https://github.com/starkware-libs/starkex-contracts",
    category: "documentation",
  },
  {
    id: "14",
    name: "STONE",
    description: "Prover and verifier for STARKs.",
    status: "Up to date",
    url: "https://github.com/starkware-libs/stone-prover",
    category: "documentation",
  },
  {
    id: "15",
    name: "sandstorm",
    description: "Cairo prover powered by miniSTARK.",
    status: "Up to date",
    url: "https://github.com/andrewmilson/sandstorm",
    category: "documentation",
  },
  {
    id: "16",
    name: "awesome-prover-mechanisms",
    description:
      "List of resources for prover mechanisms in the zkrollup ecosystem.",
    status: "Up to date",
    url: "https://github.com/niluferokay/awesome-prover-mechanisms",
    category: "documentation",
  },
  {
    id: "17",
    name: "Arithmetization I",
    description: "Part of Starkware's series on STARKs.",
    status: "Up to date",
    url: "https://medium.com/starkware/arithmetization-i-15c046390862",
    category: "blogs",
  },
  {
    id: "18",
    name: "Arithmetization II",
    description: "Part of Starkware's series on STARKs.",
    status: "Up to date",
    url: "https://medium.com/starkware/arithmetization-ii-403c3b3f4355",
    category: "blogs",
  },
  {
    id: "19",
    name: "YouTube channel",
    description: "Official StarkWare YouTube channel.",
    status: "Up to date",
    url: "https://www.youtube.com/@starkware_ltd",
    category: "community",
  },
  {
    id: "20",
    name: "Roadmap",
    description: "What’s coming next for Starknet.",
    status: "Up to date",
    url: "https://starknet.io/#roadmap",
    category: "official-website",
  },
  {
    id: "21",
    name: "SNIPs",
    description: "Starknet Improvement Proposals (SNIPs) repository.",
    status: "Up to date",
    url: "https://github.com/starknet-io/snips",
    category: "documentation",
  },
  {
    id: "22",
    name: "starkware-libs/cairo",
    description: "Official Cairo Github repository.",
    status: "Up to date",
    url: "https://github.com/starkware-libs/cairo",
    category: "documentation",
  },
  {
    id: "23",
    name: "Cairopractice",
    description:
      "Cairo blog covering various aspects of the language and its applications.",
    status: "Up to date",
    url: "https://cairopractice.com/",
    category: "blogs",
  },
  {
    id: "24",
    name: "Cairo – a Turing-complete STARK-friendly CPU architecture",
    description:
      "Whitepaper providing an in-depth look into the Cairo architecture and its STARK-friendly features.",
    status: "Up to date",
    url: "https://eprint.iacr.org/2021/1063.pdf",
    category: "documentation",
  },
  {
    id: "25",
    name: "A verified algebraic representation of Cairo program execution",
    description:
      "Proof demonstrating the soundness of Cairo's execution using the Lean proof assistant.",
    status: "Up to date",
    url: "https://arxiv.org/abs/2109.14534",
    category: "documentation",
  },
  {
    id: "26",
    name: "WTF Starknet",
    description:
      "English and Chinese tutorials covering various aspects of Starknet.",
    status: "Up to date",
    url: "https://github.com/WTFAcademy/WTF-Starknet",
    category: "tutorials",
  },
  {
    id: "27",
    name: "ethSTARK Documentation",
    description: "Explanation of the computational integrity of STARKs.",
    status: "Up to date",
    url: "https://eprint.iacr.org/2021/58",
    category: "documentation",
  },
  {
    id: "28",
    name: "STARK Paper",
    description: "Original paper introducing STARKs.",
    status: "Up to date",
    url: "https://www.starkware.co/stark",
    category: "documentation",
  },
  {
    id: "29",
    name: "FRI Protocol",
    description:
      "Explanation of the Fast Reed-Solomon Interactive Oracle Proofs (FRI) protocol.",
    status: "Up to date",
    url: "https://en.wikipedia.org/wiki/FRI_protocol",
    category: "documentation",
  },
  {
    id: "30",
    name: "DEEP-FRI Protocol",
    description:
      "Explanation of the DEEP-FRI protocol, an improvement over FRI.",
    status: "Up to date",
    url: "https://arxiv.org/abs/1903.12243",
    category: "documentation",
  },
  {
    id: "31",
    name: "Aurora",
    description: "Transparent Succinct Arguments for R1CS.",
    status: "Up to date",
    url: "https://eprint.iacr.org/2020/705.pdf",
    category: "documentation",
  },
  {
    id: "32",
    name: "Starknet Developer Tools",
    description:
      "Official documentation for Starknet developer tools, including setup guides and usage instructions.",
    status: "Up to date",
    url: "https://docs.starknet.io/documentation/tools/devtools/",
    category: "documentation",
  },
  {
    id: "33",
    name: "Starknet.js SDK",
    description: "Javascript library.",
    status: "Up to date",
    url: "https://www.starknetjs.com/",
    category: "sdk",
  },
  {
    id: "34",
    name: "Starknet.py SDK",
    description: "Python library.",
    status: "Up to date",
    url: "https://github.com/software-mansion/starknet.py",
    category: "sdk",
  },
  {
    id: "35",
    name: "Starknet-rs SDK",
    description: "Rust Library.",
    status: "Up to date",
    url: "https://github.com/xJonathanLEI/starknet-rs",
    category: "sdk",
  },
  {
    id: "36",
    name: "cairo-vm",
    description: "Rust implementation of the Cairo VM.",
    status: "Up to date",
    url: "https://github.com/lambdaclass/cairo-vm",
    category: "documentation",
  },
  {
    id: "37",
    name: "cairo-vm-go",
    description: "Golang implementation of the Cairo VM.",
    status: "Up to date",
    url: "https://github.com/NethermindEth/cairo-vm-go",
    category: "documentation",
  },
  {
    id: "38",
    name: "cairo-vm_in_go",
    description: "Another Golang implementation of the Cairo VM.",
    status: "Up to date",
    url: "https://github.com/lambdaclass/cairo-vm_in_go",
    category: "documentation",
  },
  {
    id: "39",
    name: "cairo-zig",
    description: "Zig implementation of the Cairo VM.",
    status: "Up to date",
    url: "https://github.com/keep-starknet-strange/ziggy-starkdust",
    category: "documentation",
  },
  {
    id: "40",
    name: "Setting up your environment",
    description: "Environment setup guide for Starknet development.",
    status: "Up to date",
    url: "https://docs.starknet.io/documentation/quick_start/environment_setup/",
    category: "tutorials",
  },
  {
    id: "41",
    name: "Starkli",
    description: "The recommended CLI for Starknet development.",
    status: "Up to date",
    url: "https://book.starkli.rs/",
    category: "documentation",
  },
  {
    id: "42",
    name: "Scarb",
    description:
      "The recommended build toolchain and package manager for Starknet development.",
    status: "Up to date",
    url: "https://docs.swmansion.com/scarb",
    category: "documentation",
  },
  {
    id: "43",
    name: "Vscode Cairo extension",
    description:
      "Official Cairo extension for VSCode with diagnostics, go-to-definition, completion and more.",
    status: "Up to date",
    url: "https://marketplace.visualstudio.com/items?itemName=starkware.cairo1",
    category: "plugins",
  },
  {
    id: "44",
    name: "Vim plugin for Scarb projects",
    description: "Vim plugin for projects built with Scarb.",
    status: "Up to date",
    url: "https://github.com/swan-of-bodom/scarb-vim",
    category: "plugins",
  },
  {
    id: "45",
    name: "Starknet Foundry",
    description:
      "Toolchain for smart contracts development, testing and deployment on Starknet.",
    status: "Up to date",
    url: "https://foundry-rs.github.io/starknet-foundry/",
    category: "documentation",
  },
  {
    id: "46",
    name: "Starknet Foundry Forge Template",
    description: "Template for starting projects with Starknet Foundry.",
    status: "Up to date",
    url: "https://github.com/foundry-rs/starknet_forge_template",
    category: "documentation",
  },
  {
    id: "47",
    name: "Starknet Remix",
    description:
      "The official Starknet plugin for Remix, a browser-based IDE without the need for any installation.",
    status: "Up to date",
    url: "https://remix.ethereum.org/?#activate=Starknet",
    category: "plugins",
  },
  {
    id: "48",
    name: "Starknet Devnet",
    description: "Local testnet for Starknet development.",
    status: "Up to date",
    url: "https://github.com/0xSpaceShard/starknet-devnet-rs",
    category: "documentation",
  },
  {
    id: "49",
    name: "Katana",
    description:
      "High performance sequencer that can be used as a local testnet for Starknet.",
    status: "Up to date",
    url: "https://book.dojoengine.org/toolchain/katana/overview",
    category: "documentation",
  },
  {
    id: "50",
    name: "Starknet Hardhat plugin",
    description: "Plugin for integrating Starknet tools into Hardhat projects.",
    status: "Up to date",
    url: "https://github.com/Shard-Labs/starknet-hardhat-plugin",
    category: "plugins",
  },
  {
    id: "51",
    name: "starknet-hardhat-example",
    description:
      "Example project demonstrating the usage of the Starknet Hardhat plugin.",
    status: "Up to date",
    url: "https://github.com/0xSpaceShard/starknet-hardhat-example",
    category: "documentation",
  },
  {
    id: "52",
    name: "docker-cairo",
    description: "Multi-arch Docker images with Cairo binaries.",
    status: "Up to date",
    url: "https://github.com/xJonathanLEI/docker-cairo",
    category: "documentation",
  },
  {
    id: "53",
    name: "DappLand",
    description: "The best Starknet Dapps. Built by Argent.",
    status: "Up to date",
    url: "https://www.dappland.com/",
    category: "official-website",
  },
  {
    id: "54",
    name: "Starknet dApps and tools",
    description:
      "Unofficial ecosystem page for Ethereum and its layer 2s like Starknet.",
    status: "Up to date",
    url: "https://www.ethereum-ecosystem.com/blockchains/starknet",
    category: "official-website",
  },
  {
    id: "55",
    name: "The Cairo Book",
    description: "Official Cairo documentation by the community",
    status: "Up to date",
    url: "https://book.cairo-lang.org/",
    category: "documentation",
  },
];

export const searchResources = async ({
  resources,
  search,
}: {
  search: string;
  resources: WikipediaResource[];
}) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const lowerCaseSearch = search.toLocaleLowerCase();

  return resources.filter(
    (resource) =>
      resource.name.toLocaleLowerCase().includes(lowerCaseSearch) ||
      resource.description.toLocaleLowerCase().includes(lowerCaseSearch) ||
      resource.url.toLocaleLowerCase().includes(lowerCaseSearch) ||
      resource.category.toLocaleLowerCase().includes(lowerCaseSearch),
  );
};
