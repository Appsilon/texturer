library(magrittr)
library(r2d3)
library(texturer)

t <- textures() %>%
  lines() %>%
  thicker()

d3() %>%
  select("body") %>%
  append("svg") %>%
  call(t) %>%
  append("circle") %>%
  attr("cx", 25) %>%
  attr("cy", 25) %>%
  attr("r", 20) %>%
  style("fill", textures::url(t)) %>%
  render()

# var svg = d3.select("#example").append("svg");
# var t = textures.lines().thicker();
# svg.call(t);
# svg.append("circle").style("fill", t.url());

ctx <- v8()
ctx$console()
