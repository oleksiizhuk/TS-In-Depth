
type Name = string;
type Runner  = () => string;
type  NameOrRunner = Name | Runner;

// recursive type alias
type Json = string | number | boolean | null | { [property: string]: Json } | Json[];
