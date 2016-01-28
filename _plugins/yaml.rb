#
# YAML output filter for Jekyll/Liquid.
#
# @nfreear, 22 Jan 2016.
# https://gist.github.com/joelverhagen/1850654
#
#require 'rubygems'
require 'yaml'

module YamlFilter
  def yaml(input)
    #input.to_yaml
    YAML.dump(input)
  end

  Liquid::Template.register_filter self
end
