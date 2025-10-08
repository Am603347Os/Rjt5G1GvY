// 代码生成时间: 2025-10-09 04:00:21
(function() {

  // Define the Breadcrumb class
  class Breadcrumb {
    constructor(svg, data) {
# FIXME: 处理边界情况
      this.svg = svg;
      this.data = data;
      this.build();
    }

    // Build the breadcrumb navigation
    build() {
      try {
        // Clear the SVG element in case it's not empty
        this.svg.selectAll('*').remove();

        // Define the size of the breadcrumb component
        const width = 800;
        const height = 50;
        const radius = 5;

        // Define the scales for positioning
        const x = d3.scaleLinear()
          .domain([0, d3.max(this.data, d => d.name.length)])
          .range([0, width]);

        // Append the breadcrumb group to the SVG
# 添加错误处理
        const breadcrumb = this.svg.append('g')
          .attr('transform', `translate(${radius}, ${height / 2 - radius})`);

        // Append each breadcrumb item to the group
        this.data.forEach((d, i) => {
          breadcrumb.append('rect')
            .attr('x', x(i))
            .attr('y', -radius / 2)
            .attr('width', x(d.name.length) - x(i))
            .attr('height', radius)
            .attr('fill', '#ccc');

          breadcrumb.append('text')
            .attr('x', x(i) + (x(d.name.length) - x(i)) / 2)
            .attr('y', 0)
            .attr('dy', '0.35em')
            .attr('text-anchor', 'middle')
            .text(d.name);
        });

      } catch (error) {
        console.error('Error building breadcrumb:', error);
      }
    }
  }

  // Export the Breadcrumb class for external use
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Breadcrumb;
  } else {
    window.Breadcrumb = Breadcrumb;
  }

})();
