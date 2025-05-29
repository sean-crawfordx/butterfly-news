// For all types/interfaces relating to the NY Times api
export interface News {
  copyright: string
  response: Response
}

export interface Response {
  docs: Doc[]
  meta: Meta
}

export interface Doc {
  abstract: string
  web_url: string
  snippet: string
  lead_paragraph: string
  print_section?: PrintSection
  print_page?: string
  source: Source
  multimedia: Multimedia[]
  headline: Headline
  keywords: Keyword[]
  pub_date: string
  document_type: DocumentType
  news_desk: NewsDesk
  section_name: NewsDesk
  subsection_name?: SubsectionName
  byline: Byline
  type_of_material: TypeOfMaterial
  _id: string
  word_count: number
  uri: string
}

export interface Byline {
  original: string
  person: Person[]
  organization: Source | null
}

export enum Source {
  AgenceFrancePresse = 'AGENCE FRANCE-PRESSE',
  Reuters = 'REUTERS',
  TheAssociatedPress = 'THE ASSOCIATED PRESS',
  TheEditorialBoard = 'The Editorial Board',
  TheEditors = 'The Editors',
  TheInternationalHeraldTribune = 'The International Herald Tribune',
  TheLearningNetwork = 'The Learning Network',
  TheNewYorkTimes = 'The New York Times',
  TheUpshotStaff = 'The Upshot Staff',
}

export interface Person {
  firstname: string
  middlename: null | string
  lastname: string
  qualifier: Qualifier | null
  title: null
  role: Role
  organization: string
  rank: number
}

export enum Qualifier {
  Jr = 'Jr',
  MD = 'M.D',
  QualifierJr = 'Jr.',
}

export enum Role {
  Reported = 'reported',
}

export enum DocumentType {
  Article = 'article',
  Audio = 'audio',
  Multimedia = 'multimedia',
}

export interface Headline {
  main: string
  kicker: null | string
  content_kicker: null
  print_headline: string
  name: null
  seo: null
  sub: null
}

export interface Keyword {
  name: Name
  value: string
  rank: number
  major: Major
}

export enum Major {
  N = 'N',
}

export enum Name {
  CreativeWorks = 'creative_works',
  Glocations = 'glocations',
  Organizations = 'organizations',
  Persons = 'persons',
  Subject = 'subject',
}

export interface Multimedia {
  rank: number
  subtype: Subtype
  caption: null
  credit: null
  type: Type
  url: string
  height: number
  width: number
  subType: Subtype
  crop_name: CropName
  legacy: Legacy
}

export enum CropName {
  ArticleLarge = 'articleLarge',
  Jumbo = 'jumbo',
  SuperJumbo = 'superJumbo',
  ThumbLarge = 'thumbLarge',
  ThumbStandard = 'thumbStandard',
}

export interface Legacy {
  xlarge?: string
  xlargewidth?: number
  xlargeheight?: number
  thumbnail?: string
  thumbnailwidth?: number
  thumbnailheight?: number
}

export enum Subtype {
  Jumbo = 'jumbo',
  SuperJumbo = 'superJumbo',
  ThumbLarge = 'thumbLarge',
  Thumbnail = 'thumbnail',
  Xlarge = 'xlarge',
}

export enum Type {
  Image = 'image',
}

export enum NewsDesk {
  Arts = 'Arts',
  ArtsLeisure = 'Arts&Leisure',
  Automobiles = 'Automobiles',
  Blogs = 'Blogs',
  BookReview = 'BookReview',
  Books = 'Books',
  Business = 'Business',
  BusinessDay = 'Business Day',
  Circuits = 'Circuits',
  Corrections = 'Corrections',
  CrosswordsGames = 'Crosswords & Games',
  Culture = 'Culture',
  Dealbook = 'Dealbook',
  Dining = 'Dining',
  EdLife = 'EdLife',
  Editorial = 'Editorial',
  Education = 'Education',
  Empty = '',
  FashionStyle = 'Fashion & Style',
  Food = 'Food',
  Foreign = 'Foreign',
  Giving = 'Giving',
  Health = 'Health',
  Insider = 'Insider',
  JobMarket = 'Job Market',
  Letters = 'Letters',
  Magazine = 'Magazine',
  Media = 'Media',
  Metro = 'Metro',
  Movies = 'Movies',
  MultimediaPhotos = 'Multimedia/Photos',
  NYTNow = 'NYTNow',
  National = 'National',
  NewYork = 'New York',
  NewsDesk = 'NewsDesk',
  NewsDeskNYTNow = 'NYT Now',
  NewsDeskRealEstate = 'Real Estate',
  Nodesk = 'NODESK',
  Obits = 'Obits',
  OpEd = 'OpEd',
  Opinion = 'Opinion',
  Politics = 'Politics',
  PublicEditor = 'Public Editor',
  RealEstate = 'RealEstate',
  Science = 'Science',
  Society = 'Society',
  Sports = 'Sports',
  Style = 'Style',
  Styles = 'Styles',
  Summary = 'Summary',
  SundayBusiness = 'SundayBusiness',
  SundayReview = 'Sunday Review',
  TMagazine = 'T Magazine',
  TStyle = 'TStyle',
  Technology = 'Technology',
  TheUpshot = 'The Upshot',
  Theater = 'Theater',
  TimesInsider = 'Times Insider',
  TimesTopics = 'Times Topics',
  TodaySPaper = 'Today’s Paper',
  Travel = 'Travel',
  US = 'U.S.',
  Universal = 'Universal',
  Upshot = 'Upshot',
  Washington = 'Washington',
  Weekend = 'Weekend',
  World = 'World',
  YourMoney = 'Your Money',
}

export enum PrintSection {
  A = 'A',
  Ar = 'AR',
  B = 'B',
  Br = 'BR',
  Bu = 'BU',
  C = 'C',
  CT = 'CT',
  D = 'D',
  Ed = 'ED',
  F = 'F',
  Li = 'LI',
  M2 = 'M2',
  MB = 'MB',
  Mm = 'MM',
  Nj = 'NJ',
  Re = 'RE',
  SP = 'SP',
  Sr = 'SR',
  St = 'ST',
  Tr = 'TR',
  We = 'WE',
}

export enum SubsectionName {
  Africa = 'Africa',
  Americas = 'Americas',
  América = 'América',
  ArtDesign = 'Art & Design',
  AsiaPacific = 'Asia Pacific',
  Australia = 'Australia',
  AutoRacing = 'Auto Racing',
  Baseball = 'Baseball',
  BookReview = 'Book Review',
  CollegeBasketball = 'College Basketball',
  CollegeFootball = 'College Football',
  CommercialRealEstate = 'Commercial Real Estate',
  Cycling = 'Cycling',
  DVD = 'DVD',
  Dance = 'Dance',
  DealBook = 'DealBook',
  DesignInteriors = 'Design & Interiors',
  Economy = 'Economy',
  EducationLife = 'Education Life',
  Elections = 'Elections',
  EnergyEnvironment = 'Energy & Environment ',
  Entrepreneurship = 'Entrepreneurship',
  Environment = 'Environment',
  Europe = 'Europe',
  FashionBeauty = 'Fashion & Beauty',
  Golf = 'Golf',
  HealthInsurance = 'Health Insurance',
  Hockey = 'Hockey',
  HorseRacing = 'Horse Racing',
  InternationalArts = 'International Arts',
  InternationalBusiness = 'International Business',
  InternationalSports = 'International Sports',
  InternationalStyle = 'International Style',
  Media = 'Media',
  MenSStyle = 'Men’s Style',
  MiddleEast = 'Middle East',
  Movies = 'Movies',
  Music = 'Music',
  MutualFunds = 'Mutual Funds',
  NewCars = 'New Cars',
  Olympics = 'Olympics',
  PersonalTech = 'Personal Tech',
  Politics = 'Politics',
  ProBasketball = 'Pro Basketball',
  ProFootball = 'Pro Football',
  Retirement = 'Retirement',
  Rugby = 'Rugby',
  Soccer = 'Soccer',
  SpaceCosmos = 'Space & Cosmos',
  SundayReview = 'Sunday Review',
  Television = 'Television',
  Tennis = 'Tennis',
  Weddings = 'Weddings',
  Wheels = 'Wheels',
  WomenSRunway = "Women's Runway",
  YourTaxes = 'Your Taxes',
}

export enum TypeOfMaterial {
  AnAppraisal = 'An Appraisal',
  Biography = 'Biography',
  Brief = 'Brief',
  Briefing = 'briefing',
  Correction = 'Correction',
  Editorial = 'Editorial',
  Empty = '',
  InteractiveFeature = 'Interactive Feature',
  Interview = 'Interview',
  Letter = 'Letter',
  List = 'List',
  News = 'News',
  NewsAnalysis = 'News Analysis',
  ObituaryObit = 'Obituary (Obit)',
  OpEd = 'Op-Ed',
  Question = 'Question',
  Quote = 'Quote',
  Review = 'Review',
  Schedule = 'Schedule',
  Slideshow = 'Slideshow',
  SpecialReport = 'Special Report',
  Text = 'Text',
  Video = 'Video',
}

export interface Meta {
  hits: number
}
