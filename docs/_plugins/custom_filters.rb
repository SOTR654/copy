module CustomFilters
    def custom_replace(input)
      input
        .gsub(" Sheet ", "<a href='https://sotr654.github.io/copy/Objects/Sheet.md'> <code>Sheet</code> </a>")
        .gsub(" Cell ", " <code>Cell</code> ")
    end
  end
  
  Liquid::Template.register_filter(CustomFilters)
  